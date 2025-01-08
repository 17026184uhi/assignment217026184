import os

fileNames = ["AnswerSection.js", "HintsSection.js", "Login.js", "QuestionSection.js", "QuestionPage.js", "testPage.js", "App.js", "firebase.js"]
fileNamesInvolved = ["QuestionSection.js", "QuestionPage.js", "testPage.js", 'index.tsx']

def processFolder(folder: str):
    # print('Processing folder: {0}'.format(folder))
    for f in os.listdir(folder):
        thePath = os.path.join(folder, f)
        if os.path.isdir(thePath):
            processFolder(thePath)
        elif os.path.isfile(thePath):
            processFile(thePath)

def processFile(file: str):
    fileName = os.path.basename(file)
    if fileName in fileNames:
        print("Processing file: {0}".format(fileName))
        contents = readFile(file)
        lineNo = 0
        for line in contents:
            lineNo += 1
            if srchStr in line:
                print("Found in line {0} in file {1}".format(str(lineNo), file,':'))
                print(str(line))

def readFile(filePath: str):
    lines = []
    with open(filePath, 'r') as f:
        try:
            lines = f.readlines()
        except UnicodeDecodeError as e:
            print("Couldn't open file {0}".format({filePath}))
    return lines

srchStr = 'console.log'
folderPath = r"C:\Users\richa\OneDrive\Documents\Masters\WAD\assignment217026184"

print('='* 20)
processFolder(folderPath)
print('-'* 20)
print()

# def listFilePaths(folder: str):
#     for f in os.listdir(folder):
#         thePath = os.path.join(folder, f)
#         if os.path.isdir(thePath):
#             listFilePaths(thePath)
#         else:
#             thePath = os.path.join(folder, f)
#             fileName = f
#             if fileName in fileNamesInvolved:
#                 print(thePath)        

# listFilePaths(folderPath)