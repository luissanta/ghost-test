import os
import subprocess

for i in range(1, 3):
    os.system('cp -rl cypress-project-ghost-3-4-4-vrt/results/ESCP' + str(i) +
              '* cypress-project-ghost-4-0-0-vrt/results/ESCP' + str(i) +
              '* resemble-project/results/')

for i in range(3, 5):
    os.system('cp -rl kraken-project-ghost-3-4-4-vrt/results/ESCP' + str(i) +
              '* kraken-project-ghost-4-0-0-vrt/results/ESCP' + str(i) +
              '* resemble-project/results/')

os.chdir('resemble-project')
os.system('npm run test')
os.chdir('..')
os.system('echo ----------------------------------------')
