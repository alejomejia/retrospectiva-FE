import fs from 'fs'

const userInput = process.argv[2]

// Validate input before making component
const validateInput = (input) => {
  const onlyLetters = new RegExp('[^A-Za-z]')

  if (!input) {
    console.log('🚫 You must give a name, please try again...')
    process.exit(0)
  }

  if (input.match(onlyLetters)) {
    console.log(
      '🚫 You should not include special characters or numbers, please try again...'
    )
    process.exit(0)
  }

  if (input.includes(' ')) {
    console.log('🚫 Component name cannot contain spaces, please try again...')
    process.exit(0)
  }

  if (fs.existsSync(`src/components/${input}`)) {
    console.log('🚫 Component already exists, please try again...')
    process.exit(0)
  }
}

validateInput(userInput)

// Transform input to match component naming rules
const userInputLowerCase = userInput.toLowerCase()
const userInputArray = userInputLowerCase.split('')
const capitalizeInput = userInputArray[0].toUpperCase()
const componentName = userInputArray
  .join('')
  .replace(userInputArray[0], capitalizeInput)

// Make a folder for the component
const componentPath = `src/components/${componentName}`
fs.mkdirSync(componentPath)

// Add files content
const componentMainFile = `import * as S from './${componentName}.styles'

export interface ${componentName}Props {}

const ${componentName} = ({}: ${componentName}Props) => <S.${componentName}Wrapper>${componentName}</S.${componentName}Wrapper>

export default ${componentName}

`

const componentStylesFile = `import styled from 'styled-components'

export const ${componentName}Wrapper = styled.div\`\`
  
`

// Make files
fs.writeFileSync(
  `${componentPath}/${componentName}.tsx`,
  componentMainFile,
  (error) => {
    if (error) throw error
  }
)

fs.writeFileSync(
  `${componentPath}/${componentName}.styles.ts`,
  componentStylesFile,
  (error) => {
    if (error) throw error
  }
)

console.log(`✅ ${componentName} component was successfully created!`)
process.exit(0)
