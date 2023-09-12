import Button from "../UI_components/Button/Button";
import Label from "../UI_components/Label/Label";
import InputSingle from "../UI_components/InputField/InputSingle/InputSingle";
import InputBasic from "../UI_components/InputField/InputBasic/InputBasic";
import Select from "../UI_components/Dropdown/Dropdown";
import DropDown from "../UI_components/Dropdown/Dropdown";
import {PRIMARY_BLUE, PRIMARY_VIOLET, SECONDARY_YELLOW} from "../../Constants/Colors/Colors";


function App() {

  const iconPath = "../../../Images/Icons/btn_icon_star_white.png";
    const options = [
        { value: "1", label: "Option 1", color: `${PRIMARY_VIOLET}` },
        { value: "2", label: "Option 2", color: `${PRIMARY_BLUE}` },
        { value: "3", label: "Option 3", color: `${SECONDARY_YELLOW}` },
        { value: "4", label: "Option 4", color: `${PRIMARY_VIOLET}` },
        { value: "5", label: "Option 5", color: `${PRIMARY_BLUE}` },
        { value: "6", label: "Option 6", color: `${SECONDARY_YELLOW}` },
    ];
    const handleSelectChange = (selectedOption: any) => {
        console.log("Выбрано значение:", selectedOption);
    };


  return (
    <div>
        {/*<Button label={'Button'} theme={"white"} property={"light"} size={"small"} state={"disabled"}/>*/}
        {/*<Button label={'Button'} theme={"white"} property={"neutral"} size={"small"} state={"enabled"}/>*/}
        {/*<Button label={'Button'} theme={"white"} property={"light"} size={"medium"} state={"enabled"}/>*/}
        {/*<Button label={'hi everyone '} theme={"white"} property={"neutral"} size={"medium"} state={"enabled"} iconPosition={'left'} icon={<img src={iconPath} alt="" />}/>*/}
        {/*<Button label={'Button'} theme={"white"} property={"light"} size={"medium"} state={"enabled"} iconPosition={'right'} icon={<img src={iconPath} alt="" />}/>*/}
        {/*<Button label={'Button'} theme={"white"} property={"neutral"} size={"medium"} state={"disabled"}/>*/}
        {/*<Button label={'Button'} theme={"dark"} property={"neutral"} size={"medium"} state={"enabled"}/>*/}
        {/*<Button label={'Button'} theme={"dark"} property={"neutral"} size={"medium"} state={"disabled"}/>*/}
        {/*<Button label={'Button'} theme={"dark"} property={"light"} size={"small"} state={"enabled"}/>*/}
        {/*<Label color={"red"} state={"solid"} payload={"any text"}/>*/}
        {/*<Label color={"blue"} state={"ghost"} payload={"any text"}/>*/}
        {/*<Label color={"black"} state={"solid"} payload={"any text"}/>*/}
        {/*<Label color={"black"} state={"ghost"} payload={"any text"}/>*/}
        {/*<Label color={"green"} state={"solid"} payload={"any text"}/>*/}
        {/*<Label color={"green"} state={"ghost"} payload={"any text"}/>*/}
        {/*<Label color={"red"} state={"ghost"} payload={"any text"}/>*/}
        <InputSingle placeholder={'Enter your email'}/>
          <InputBasic placeholder={'test'} label={'email'}/>
        <DropDown options={options} onChange={handleSelectChange} />



    </div>
  );
}

export default App;
