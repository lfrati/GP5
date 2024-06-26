from textual.app import App, ComposeResult
from textual.containers import Vertical
from textual.widgets import Input, Static
from rich.console import Console
from threading import Thread
import json
from openai import OpenAI
from pathlib import Path
import os


def load_env():

    env = Path(".env")
    if not env.exists():
        print("No .env found. Skipping.")
        return
    lines = env.read_text().splitlines()
    for i, line in enumerate(lines):
        pieces = line.split("=")
        if len(pieces) == 2:
            key, val = pieces
            os.environ[key] = val
            print(f"Added {key} from .env to os.environ")
        else:
            print(f"Parsing .env line {i}: ERROR")


load_env()
client = OpenAI()
console = Console()


def generate(prompt):
    MODEL = "gpt-4o"
    # example with a system message
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant, tasked with generating p5.js sketches. Please responde in valid JSON format. Use the 'explanation' field to comment and explain your reasoning in generating the output. Use the 'code' field to list the code to run, this field can contain only valid javascript code and p5 function calls. The 'code' field should always contain at least the definition of setup() and draw() so that it can succesfully run in the p5.js framework. Please make sure the p5 code in the 'code' field uses the windowWidth and windowHeight when creating the canvas.",
            },
            {"role": "user", "content": prompt},
        ],
        response_format={"type": "json_object"},
        temperature=1,
        n=4,
    )

    for i, choice in enumerate(response.choices):
        msg = choice.message.content
        jmsg = json.loads(msg)
        file = f"generated/sketch{i+1}.js"
        with open(file, "w") as f:
            code = jmsg["code"]
            f.write(code)


# Define the function that will run when the user presses enter
def long_running_task(user_input, callback):
    generate(user_input)
    callback()


class MyTUI(App):
    def compose(self) -> ComposeResult:
        self.input_box = Input(placeholder="Enter your prompt here...")
        self.status = Static("")

        yield Vertical(self.input_box, self.status)

    async def on_input_submitted(self, event: Input.Submitted) -> None:
        user_input = event.value
        self.status.update("\n Generating sketches...")
        # self.refresh()

        def task_callback():
            self.status.update("\n Done.")
            self.refresh()

        # Start the long-running task in a separate thread
        thread = Thread(target=long_running_task, args=(user_input, task_callback))
        thread.start()


if __name__ == "__main__":
    app = MyTUI()
    app.run()
