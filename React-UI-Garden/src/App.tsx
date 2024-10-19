import Button from './components/Button/Button';
import Dropdown from './components/Dropdown/Dropdown';
import Table from './components/Table/Table';
import Card from './components/Card/Card';
import RadioButton from './components/RadioButton/RadioButton';
import Text from './components/Text/Text';
import HeroImage from './components/HeroImage/HeroImage';
import Img from './components/Img/Img';
import Label from './components/Label/Label';
import SampleImg from './assets/Sample.jpg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h2>Web Component Library </h2>
        <Button label="Click Me" />
        <br />
        <Dropdown options={[{ label: 'Option 1', value: '1' }]} />
        <br />
        <Table
          headers={['ID', 'Name']}
          data={[
            {id: 1,name: 'Row 1'},
            {id: 2,name: 'Row 2'},
          ]}
        />
        <br />
        <Card title="Card Title" content="This is a sample card content." />
        <RadioButton label="Radio Option" value="1" name="radio-group" />
        <Text content="Sample Text" />
        <Label text="Sample Label" />
        <HeroImage imageUrl={SampleImg} />
        <br />
        <Img src={SampleImg} alt="Sample Image" />
      </div>
    </>
  )
}

export default App
