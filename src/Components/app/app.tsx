import Button from "../UI_components/Button/Button";
import Label from "../UI_components/Label/Label";
import InputSingle from "../UI_components/InputField/InputSingle/InputSingle";
import InputBasic from "../UI_components/InputField/InputBasic/InputBasic";



function App() {

  const iconPath = "../../../Images/Icons/btn_icon_star_white.png";

  return (
    <div>
        <Button label={'Button'} theme={"white"} property={"light"} size={"small"} state={"disabled"}/>
        <Button label={'Button'} theme={"white"} property={"neutral"} size={"small"} state={"enabled"}/>
        <Button label={'Button'} theme={"white"} property={"light"} size={"medium"} state={"enabled"}/>
        <Button label={'hi everyone '} theme={"white"} property={"neutral"} size={"medium"} state={"enabled"} iconPosition={'left'} icon={<img src={iconPath} alt="" />}/>
        <Button label={'Button'} theme={"white"} property={"light"} size={"medium"} state={"enabled"} iconPosition={'right'} icon={<img src={iconPath} alt="" />}/>
        <Button label={'Button'} theme={"white"} property={"neutral"} size={"medium"} state={"disabled"}/>
        <Button label={'Button'} theme={"dark"} property={"neutral"} size={"medium"} state={"enabled"}/>
        <Button label={'Button'} theme={"dark"} property={"neutral"} size={"medium"} state={"disabled"}/>
        <Button label={'Button'} theme={"dark"} property={"light"} size={"small"} state={"enabled"}/>
        <Label color={"red"} state={"solid"} payload={"any text"}/>
        <Label color={"blue"} state={"ghost"} payload={"any text"}/>
        <Label color={"black"} state={"solid"} payload={"any text"}/>
        <Label color={"black"} state={"ghost"} payload={"any text"}/>
        <Label color={"green"} state={"solid"} payload={"any text"}/>
        <Label color={"green"} state={"ghost"} payload={"any text"}/>
        <Label color={"red"} state={"ghost"} payload={"any text"}/>
        {/*<InputSingle placeholder={'Enter your email'}/>*/}
          <InputBasic placeholder={'test'} label={'email'}/>


    </div>
  );
}

export default App;
