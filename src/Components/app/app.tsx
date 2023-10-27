import Button from "../UI_components/Button/Button";
import Label from "../UI_components/Label/Label";
import InputSingle from "../UI_components/InputField/InputSingle/InputSingle";
import InputBasic from "../UI_components/InputField/InputBasic/InputBasic";
import Select from "../UI_components/Dropdown/Dropdown";
import DropDown from "../UI_components/Dropdown/Dropdown";
import {
    NEUTRAL_WHITE,
    PRIMARY_BLUE,
    PRIMARY_VIOLET,
    SECONDARY_YELLOW
} from "../../Constants/Colors/Colors";
import SearchInput from "../UI_components/SearchInput/SearchInput";
import Accordion from "../UI_components/AccordionList/AccordionList";
import Navbar from "../HeaderNav/HeaderNav";
import Footer from "../Footer/Footer";
import AuctionItem from "../AuctionItem/AuctionItem";
// @ts-ignore
import image1 from '../../Images/ImageItems/image_2.png'
// @ts-ignore
import image3 from '../../Images/ImageItems/image_3.png'
// @ts-ignore
import image4 from '../../Images/ImageItems/image_5.png'
// @ts-ignore
import image5 from '../..//Images/ImageItems/image_6.png'
import HeaderNav from "../HeaderNav/HeaderNav";
import UserMiniProfile from "../UserMiniProfile/UserMiniProfile";
import List from "../UserList/UserList";
import Slider from "../Slider/Slider";
import TopCreatorsCard from "../TopCreatorsCard/TopCreatorsCard";
import avatarTest from '../../Images/Avatars/avatar_6.png'
import styled from "styled-components";
import TopCreatorsSlider from "../TopCreatorsSlider/TopCreatorsSlider";
import Feed from "../Feed/Feed";
import CardItem from "../CardItem/CardItem";
import CardLikeButton from "../UI_components/CardLikeButton/CardLikeButton";
import HotCollection from "../HotCollection/HotCollection";
import avatarMock from '../../Images/Avatars/avatar_6.png'
import PreFooter from "../PreFooter/PreFooter";
import cubesImg from '../../Images/Logo/cubes.png'
import FeedGallery from "../FeedGallery/FeedGallery";


// @ts-ignore
function App() {


    const options = [
        {value: "1", label: "Option 1", color: `${PRIMARY_VIOLET}`},
        {value: "2", label: "Option 2", color: `${PRIMARY_BLUE}`},
        {value: "3", label: "Option 3", color: `${SECONDARY_YELLOW}`},
        {value: "4", label: "Option 4", color: `${PRIMARY_VIOLET}`},
        {value: "5", label: "Option 5", color: `${PRIMARY_BLUE}`},
        {value: "6", label: "Option 6", color: `${SECONDARY_YELLOW}`},
    ];
    const handleSelectChange = (selectedOption: any) => {
        console.log("Выбрано значение:", selectedOption);
    };

    const items = [
        image1, image5, image3, image4
    ];

    const list = styled.div`
    background-color: ${NEUTRAL_WHITE};
    display: flex;
    flex-direction: row;
`;

    const slides = [
        <AuctionItem imageUrl={image1} username="Alice" price={1500} imageName="Image for bests" expiryTime={20000}  />,
        <AuctionItem imageUrl={image3} username="Charlie" price={1800} imageName="Image for " expiryTime={20000}  />,
        <AuctionItem imageUrl={image4} username="Bobster" price={4200} imageName="Image for any" expiryTime={22000}  />,
        <AuctionItem imageUrl={image5} username="Charlie Brown" price={7000} imageName="Image for"
                     expiryTime={18000}/>,
        <AuctionItem imageUrl={image5} username="Charlie Brown" price={7000} imageName="Image for" expiryTime={18000}  />,
    ];

    const slidesSellers = [
        <TopCreatorsCard avatar={avatarTest} name={'Mike'} amount={1000} />,
        <TopCreatorsCard avatar={avatarTest} name={'Mike'} amount={1000} />,
        <TopCreatorsCard avatar={avatarTest} name={'Mike'} amount={1000} />,
        <TopCreatorsCard avatar={avatarTest} name={'Mike'} amount={1000} />,
        <TopCreatorsCard avatar={avatarTest} name={'Mike'} amount={1000} />,
        <TopCreatorsCard avatar={avatarTest} name={'Mike'} amount={1000} />,
        <TopCreatorsCard avatar={avatarTest} name={'Mike'} amount={1000} />,
        <TopCreatorsCard avatar={avatarTest} name={'Mike'} amount={1000} />
    ]

    const autors = [
        `${avatarTest}`,
        `${avatarTest}`,
        `${avatarTest}`,
    ];

    const slidesCards = [
        <CardItem imageUrl={image3} title={'any card'} authors={autors}/>,
        <CardItem imageUrl={image4} title={'any card'} authors={autors}/>,
        <CardItem imageUrl={image5} title={'any card'} authors={autors}/>,
        <CardItem imageUrl={image3} title={'any card'} authors={autors}/>,
        <CardItem imageUrl={image4} title={'any card'} authors={autors}/>,
        <CardItem imageUrl={image5} title={'any card'} authors={autors}/>,
        <CardItem imageUrl={image3} title={'any card'} authors={autors}/>,
        <CardItem imageUrl={image4} title={'any card'} authors={autors}/>,
        <CardItem imageUrl={image5} title={'any card'} authors={autors}/>,
        <CardItem imageUrl={image3} title={'any card'} authors={autors}/>,
        <CardItem imageUrl={image4} title={'any card'} authors={autors}/>,
    ]

    return (
       <>
        <HeaderNav/>
           <div style={{marginLeft: "400px", display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '150px'}}/>
        <Slider cards={1} cardContainer={1500} position={'auction'}>
            {slides}
        </Slider>
           <div style={{marginLeft: "400px", display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '150px'}}/>


               <Slider cards={5} position={'creators'} cardContainer={280}>
                   {slidesSellers}
               </Slider>
           <div style={{marginLeft: "400px", display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '150px'}}/>

           <Slider cards={4} position={'hotbid'} cardContainer={250}>
               {slidesCards}
           </Slider>

           <div style={{marginLeft: "400px"}}>
               <FeedGallery/>
           {/*    <Feed size={'big'} imageURL={image4} title={'One image'} author={'ruby robinson'} authorAvatar={avatarTest} price={'1000 ETH'} stock={'1 of 3'}/>*/}
           {/*<Feed size={'small'} imageURL={image1} title={'One image'} author={'ruby robinson'} authorAvatar={avatarTest} price={'1000 ETH'} stock={'1 of 3'}/>*/}
           {/*    <Feed size={'small'} imageURL={image5} title={'One image'} author={'ruby robinson'} authorAvatar={avatarTest} price={'1000 ETH'} stock={'1 of 3'}/>*/}
           {/*    <Feed size={'small'} imageURL={image3} title={'One image'} author={'ruby robinson'} authorAvatar={avatarTest} price={'1000 ETH'} stock={'1 of 12'}/>*/}
               <div style={{marginLeft: "100px", display: 'flex', flexDirection: 'row', gap: '20px'}}>
               <CardItem imageUrl={image3} title={'any card'} authors={autors}/>
               <CardItem imageUrl={image4} title={'any card'} authors={autors}/>
               <CardItem imageUrl={image5} title={'any card'} authors={autors}/>
               </div>
               <div style={{marginLeft: "100px", display: 'flex', flexDirection: 'row', gap: '20px'}}>
               <HotCollection images={items} title={'collections'} author={'frent frent'} avatar={avatarMock} itemsCount={items.length}/>
                   <HotCollection images={items} title={'collections'} author={'frent frent'} avatar={avatarMock} itemsCount={items.length}/>
                   <HotCollection images={items} title={'collections'} author={'frent frent'} avatar={avatarMock} itemsCount={items.length}/>
               </div>
           </div>
           <PreFooter imageUrl={cubesImg} largeText={'Earn free crypto with Crypter'}
                       mediumText={'Save your time with Stacks'} smallText={'A creative agency that lead and inspire'}/>

        <Footer/>
       </>
    )
}

export default App;
