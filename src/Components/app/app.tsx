import Button from "../UI_components/Button/Button";
import StyledRectangle from "../UI_components/Label/Label";



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
        <StyledRectangle color={"red"} state={"solid"} payload={"any text"}/>
        <StyledRectangle color={"blue"} state={"ghost"} payload={"any text"}/>
        <StyledRectangle color={"black"} state={"solid"} payload={"any text"}/>
        <StyledRectangle color={"black"} state={"ghost"} payload={"any text"}/>
        <StyledRectangle color={"green"} state={"solid"} payload={"any text"}/>
        <StyledRectangle color={"green"} state={"ghost"} payload={"any text"}/>
        <StyledRectangle color={"red"} state={"ghost"} payload={"any text"}/>


    </div>
  );
}

export default App;
