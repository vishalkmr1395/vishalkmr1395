#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo 'Usage react_geneator.sh <page|component|container> <file-name>'
    exit
fi

folderType=$1
fileName=$2

dir=${folderType}s/$fileName
mkdir -p $dir
cd $dir

touch index.tsx
touch ${fileName}.module.scss

# Split name with - to form a Pascal Case Naming
IFS='-' read -r -a array <<< "$fileName"
componentName=""

for name in "${array[@]}"
do
	pascalName="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}"
    componentName+=$pascalName
done

echo $componentName

# Write Placeholder in the created file
cat > index.tsx << EOM
import styles from './${fileName}.module.scss';
import React from 'react';

interface ${componentName}Interface {

}

/**
 * ${componentName} ${folderType}
 * @param props 
 */
export const ${componentName}: React.FunctionComponent<${componentName}Interface> = (props) => {
    return(
        <div>${componentName}</div>
    );
}
EOM

cd ..

# Add the entry to index.ts
if [[ ! -e index.ts ]]; then
    touch index.ts
fi

printf "\nexport * from './${fileName}';" >> index.ts

