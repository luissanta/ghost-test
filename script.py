import os

# Instala dependencias en todos los proyectos
projects = [
    'cypress-project-ghost-3-41-1-vrt',
    'cypress-project-ghost-4-44-0-vrt',
    'kraken-project-ghost-3-41-1-vrt',
    'kraken-project-ghost-4-44-0-vrt',
    'resemble-project'
]

for project in projects:
    os.chdir(project)
    os.system('npm install')
    os.chdir('..')


# Ejecuta todos los test en ambas versiones de kraken
kraken_directories = ['kraken-project-ghost-3-41-1-vrt', 'kraken-project-ghost-4-44-0-vrt']

for kraken_directory in kraken_directories:
    kraken_scenarios = os.listdir(kraken_directory + '/scenarios')
    for kraken_scenario in kraken_scenarios:
        os.system('cp ' + kraken_directory + '/scenarios/' + kraken_scenario + ' ' + kraken_directory + '/features')
        os.chdir(kraken_directory)
        os.system('npx kraken-node run')
        os.chdir('..')
        os.system('rm -r ' + kraken_directory + '/features/' + kraken_scenario)


# Extrae todos los screenshots de kraken para ser analizados por resemble
kraken_directory_scenarios = os.listdir(kraken_directories[0] + '/results')

if not os.path.exists('resemble-project/results'):
    os.chdir('resemble-project')
    os.system('mkdir results')
    os.chdir('..')

for kraken_directory_scenario in kraken_directory_scenarios:
    os.system('cp -rl kraken-project-ghost-3-41-1-vrt/results/' + kraken_directory_scenario +
              '* kraken-project-ghost-4-44-0-vrt/results/' + kraken_directory_scenario +
              '* resemble-project/results/')


# Ejecuta todos los test en ambas versiones de cypress
cypress_directories = ['cypress-project-ghost-3-41-1-vrt', 'cypress-project-ghost-4-44-0-vrt']

for cypress_directory in cypress_directories:
    os.chdir(cypress_directory)
    os.system('npm run run')
    os.chdir('..')


# Extrae todos los screenshots de cypress para ser analizados por resemble
cypress_directory_scenarios = os.listdir(cypress_directories[0] + '/results')

for cypress_directory_scenario in cypress_directory_scenarios:
    os.system('cp -rl cypress-project-ghost-3-41-1-vrt/results/' + cypress_directory_scenario +
              '* cypress-project-ghost-4-44-0-vrt/results/' + cypress_directory_scenario +
              '* resemble-project/results/')


# Ejecuta el análisis de comparación de los escenarios de pruebas en diferentes versiones
os.chdir('resemble-project')
os.system('npm run test')
os.chdir('..')
os.system('echo ----------------------------------------')
