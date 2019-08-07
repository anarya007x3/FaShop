FROM python:3.7.4

RUN mkdir /server
WORKDIR /server

ADD requirements.txt /tmp/requirements.txt
RUN pip install -r /tmp/requirements.txt
ADD . /server/