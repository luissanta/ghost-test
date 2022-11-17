import os
import subprocess

for i in range(1, 3):
    os.system('cp -rl cypress-project_1/results/ESCP' + str(i) +
              '* cypress-project_2/results/ESCP' + str(i) +
              '* resemble-project/results/')

for i in range(3, 5):
    os.system('cp -rl kraken-project_1/results/ESCP' + str(i) +
              '* kraken-project_2/results/ESCP' + str(i) +
              '* resemble-project/results/')

os.chdir('resemble-project')
os.system('npm run test')
os.chdir('..')
os.system('echo ----------------------------------------')
