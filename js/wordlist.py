import re
import codecs

words = []

with codecs.open('./wordlist.txt', "rb", encoding="utf-8", errors='ignore') as f:
      for line in f:
        if re.search(r'^[A-Z]', line):
          pass
          # found = re.match(r'^[A-Z].*', line)
        else:
          words.append(line)

print(words)