
#!/bin/env python

# This small program asks a command-line user to provide the public DNS for their EC2 instance, then subs that name into the config for nginx (our webserver)
import os
import re
import sys

ec2_dns = sys.argv[1]

# Read in the file
with open('/home/ec2-user/crangraph/setup/virtual.conf', 'r') as file :
  in_file = file.read()

# Replace the target string
file_contents = in_file.replace('~~AWS_EC2_PUBLIC_DNS~~', ec2_dns)

# Write the file out again
with open('/home/ec2-user/crangraph/setup/virtual.conf', 'w') as file:
  file.write(file_contents)