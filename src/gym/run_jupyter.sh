#!/bin/bash

xvfb-run -s '-screen 0 1400x900x24' jupyter notebook --no-browser --allow-root --ip 0.0.0.0 --NotebookApp.token=''
