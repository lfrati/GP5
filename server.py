from livereload import Server
import os

PORT = 8000


def start_server():
    server = Server()
    generated_dir = os.path.join(os.getcwd(), "generated")
    server.watch(generated_dir)
    server.serve(port=PORT, root=generated_dir, open_url_delay=0.1)


if __name__ == "__main__":
    start_server()
