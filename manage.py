#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import print_function
import os

from app import create_app
from flask.ext.script import Manager

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
manager = Manager(app)

@manager.command
def route():
	for rule in app.url_map.iter_rules():
		print(str(rule), 'methods:', ','.join(rule.methods), '->', rule.endpoint)


if __name__ == "__main__":
	manager.run()
