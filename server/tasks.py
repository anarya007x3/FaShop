import os
import threading
import time

from invoke import task, run


def wait_port_is_open(host, port):
    import socket
    while True:
        try:
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            result = sock.connect_ex((host, port))
            sock.close()
            if result == 0:
                return
        except socket.gaierror:
            pass
        time.sleep(1)


@task
def init_db(ctx, recreate_db=False):
    wait_port_is_open(os.getenv('DB_HOST', 'db'), 5432)
    # TODO loading dump db
    # if recreate_db:
    #     ctx.run('python manage.py dbshell < clear.sql')
    #     ctx.run('python manage.py dbshell < db.dump')
    ctx.run('python manage.py makemigrations')
    ctx.run('python manage.py migrate')


@task
def run(ctx):
    init_db(ctx, recreate_db=True)
    ctx.run('python manage.py runserver 0.0.0.0:9000')


@task
def run_api_tests(ctx, app=[]):
    app=' '.join(app)
    wait_port_is_open('search_engine', 9200)
    wait_port_is_open('react', 3000)
    wait_port_is_open('django', 9000)
    ctx.run('python manage.py loaddata search_index/fixtures/*.json')
    ctx.run('./manage.py refresh_restrictions')
    ctx.run('python manage.py search_index --rebuild -f')
    ctx.run(f'coverage run ./manage.py test {app}  -v 2 --noinput --exclude-tag=selenium --testrunner=integration_tests.testrunner.NoDbTestRunner --settings=AtlusBlue.settings-test')
    ctx.run('coverage report')
