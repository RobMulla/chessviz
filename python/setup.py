import setuptools

# Required packages
normal_packages = [
    'python-chess'
]
documentation_packages = [
    "sphinx",
    "sphinxcontrib-napoleon",
    "sphinxcontrib-programoutput"
]

setuptools.setup(name='chessviz',
                 version='0.1',
                 description='Python functions used to an app which visualizes chess games',
                 url='https://github.com/jameslamb/repos/chessviz',
                 packages=setuptools.find_packages(),
                 install_requires=normal_packages,
                 extras_requires={
                    'all': normal_packages + documentation_packages,
                    'docs': documentation_packages
                 }
)
