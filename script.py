import os
import subprocess

# projects = [
#     'cypress-project-ghost-3-4-4-vrt',
#     'cypress-project-ghost-4-0-0-vrt',
#     'kraken-project-ghost-3-4-4-vrt',
#     'kraken-project-ghost-4-0-0-vrt',
#     'resemble-project'
# ]
#
# for project in projects:
#     os.chdir(project)
#     os.system('find . -name node_modules')
#     # os.system('npm install')
#     os.chdir('..')

directory = 'kraken-project-ghost-3-4-4-vrt'
test_scenarios_in_kraken = os.listdir(directory + '/scenarios')

for test_scenario_in_kraken in test_scenarios_in_kraken:
    os.system('cp ' + directory + '/scenarios/' + test_scenario_in_kraken + ' ' + directory + '/features')
    os.chdir(directory)
    os.system('npx kraken-node run')
    os.system('rm -r ' + directory + '/features/' + test_scenario_in_kraken)
    os.chdir('..')

# for i in range(1, 3):
#     os.system('cp -rl cypress-project-ghost-3-4-4-vrt/results/ESCP' + str(i) +
#               '* cypress-project-ghost-4-0-0-vrt/results/ESCP' + str(i) +
#               '* resemble-project/results/')
#
# for i in range(3, 5):
#     os.system('cp -rl kraken-project-ghost-3-4-4-vrt/results/ESCP' + str(i) +
#               '* kraken-project-ghost-4-0-0-vrt/results/ESCP' + str(i) +
#               '* resemble-project/results/')
#
# os.chdir('resemble-project')
# os.system('npm run test')
# os.chdir('..')
# os.system('echo ----------------------------------------')
