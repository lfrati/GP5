from datetime import datetime
import json
import os
from pathlib import Path
import random
import string
from threading import Thread

from openai import OpenAI
from rich.console import Console
from textual.app import App, ComposeResult
from textual.containers import Vertical
from textual.widgets import Input, Static


def generate_random_string(length):
    letters = string.ascii_letters + string.digits
    return "".join(random.choice(letters) for _ in range(length))


def create_random_folder(length):
    current_time = datetime.now().strftime("%Y%m%d%H%M%S")
    random_string = generate_random_string(length)
    folder_name = f"backups/{current_time}_{random_string}"
    os.makedirs(folder_name, exist_ok=True)
    return folder_name


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
    # MODEL = "gpt-4"
    # MODEL = "gpt-3.5-turbo"
    # example with a system message
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant, tasked with generating p5.js sketches. Please respond in valid JSON format. Use the 'explanation' field to comment and explain your reasoning in generating the output. The 'explanation' field should always come first. Use the 'code' field to list the code to run, this field can contain only valid javascript code and p5 function calls. The 'code' field should always contain at least the definition of setup() and draw() so that it can succesfully run in the p5.js framework. Please make sure the p5 code in the 'code' field uses the windowWidth and windowHeight when creating the canvas.",
            },
            {"role": "user", "content": prompt},
        ],
        response_format={"type": "json_object"},
        temperature=1,
        n=4,
    )

    folder_name = create_random_folder(10)

    for i, choice in enumerate(response.choices):
        msg = choice.message.content
        jmsg = json.loads(msg)
        file = f"generated/sketch{i+1}.js"
        code = jmsg["code"]
        expl = jmsg["explanation"].replace(". ", ".\n")
        js = f"/*\n{expl}*/\n\n{code}"
        with open(file, "w") as f:
            f.write(js)
        with open(f"{folder_name}/sketch{i+1}.js", "w") as f:
            f.write(js)
        with open(f"{folder_name}/prompt.txt", "w") as f:
            f.write(prompt)


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
