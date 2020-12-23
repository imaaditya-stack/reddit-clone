import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import MissedVideoCallIcon from "@material-ui/icons/MissedVideoCall";
import RedditIcon from "@material-ui/icons/Reddit";
import PublicIcon from "@material-ui/icons/Public";
import FiberSmartRecordRoundedIcon from "@material-ui/icons/FiberSmartRecordRounded";
import LayersRoundedIcon from "@material-ui/icons/LayersRounded";
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded";
import EditIcon from "@material-ui/icons/Edit";
import CopyrightIcon from "@material-ui/icons/Copyright";
import SecurityIcon from "@material-ui/icons/Security";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PersonIcon from "@material-ui/icons/Person";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AddIcon from "@material-ui/icons/Add";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SettingsIcon from "@material-ui/icons/Settings";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import CardGiftcardRoundedIcon from "@material-ui/icons/CardGiftcardRounded";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";

const ProfileDropdownItems = [
    { Label: "Profile", Icon: AccountBoxIcon },
    { Label: "Create Avatar", Icon: AddIcon },
    { Label: "User Settings", Icon: SettingsIcon },
    { Label: "Help Center", Icon: HelpOutlineIcon },
    { Label: "Log Out", Icon: PowerSettingsNewIcon },
];

const CommentDropdownItems = [
    { Label: "Give Award", Icon: CardGiftcardRoundedIcon },
    { Label: "Copy Link", Icon: LinkRoundedIcon },
    { Label: "Embed", Icon: CodeRoundedIcon },
    { Label: "Save", Icon: BookmarkRoundedIcon },
];

const UserInfo = { Username: "Aditya", karmas: 4 };

const Sidebar = {
    Feeds: [
        { Label: "Home", Icon: HomeIcon },
        { Label: "Popular", Icon: TrendingUpIcon },
        { Label: "All", Icon: BarChartIcon },
        { Label: "Top Communities", Icon: FormatListNumberedIcon },
        { Label: "Reddit Live", Icon: MissedVideoCallIcon },
    ],

    Communities: [
        { Label: "r/announcements", Icon: RedditIcon, Color: "#FF4500" },
        { Label: "r/devops", Icon: PublicIcon },
        { Label: "r/docker", Icon: PublicIcon },
        { Label: "r/sonarr", Icon: FiberSmartRecordRoundedIcon },
        { Label: "r/react", Icon: LayersRoundedIcon },
        { Label: "r/synology", Icon: ShoppingBasketRoundedIcon },
    ],

    Other: [
        { Label: "User Settings", Icon: PersonIcon, Color: "#999" },
        { Label: "Messages", Icon: EmailRoundedIcon, Color: "#999" },
        { Label: "Create Post", Icon: EditIcon },
        { Label: "Coins", Icon: CopyrightIcon, Color: "orange" },
        { Label: "Premium", Icon: SecurityIcon, Color: "#FF4500" },
    ],
};

const Widgets = {
    Community: {
        Banner: "https://www.redditstatic.com/desktop2x/img/discovery/cookbooks-snoo.png",
        Title: "Food communities to make you go mmmm",
        Items: [{
                Label: "r/WeWantPlates",
                Image: "https://styles.redditmedia.com/t5_396ym/styles/communityIcon_wz7z085g3yw21.png",
            },
            {
                Label: "r/food",
                Image: "https://styles.redditmedia.com/t5_2qls5/styles/communityIcon_ialza5j4f6m01.png",
            },

            {
                Label: "r/GiftRecipes",
                Image: "https://styles.redditmedia.com/t5_396ym/styles/communityIcon_wz7z085g3yw21.png",
            },
            {
                Label: "r/Breadit",
                Image: "https://styles.redditmedia.com/t5_346di/styles/communityIcon_h0rnn4knibj41.png",
            },
            {
                Label: "r/steak",
                Image: "https://styles.redditmedia.com/t5_396ym/styles/communityIcon_wz7z085g3yw21.png",
            },
        ],
        InlineButtons: ["Top", "Near You", "News", "Food"],
    },
    Advertisement_1: "https://tpc.googlesyndication.com/simgad/3933920029945771655?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qlzgWl5xqXS8n5P0XG0SARM7Ju0Hw",
    Advertisement_2: "https://s0.2mdn.net/9099988/12102020-213429434-300x600.jpg",
    VideoCommunity: {
        Title: "Top Video Communities",
        Items: [{
                Label: "r/funny",
                Image: "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
                members: "34,717,533",
            },
            {
                Label: "r/HighQualityGif",
                Image: "https://b.thumbs.redditmedia.com/6dFf0Zrq_96sY5ZDg6rF_BbMqu41tFS8wyOWQAoX_xY.png",
                members: "2,384,375",
            },
            {
                Label: "r/youtubehaiku",
                Image: "https://b.thumbs.redditmedia.com/Rtu2Mw0L-mx7AeYtHKkbAh75jQbgzy_Hk2UIlLeZFSs.png",
                members: "944,747",
            },
            {
                Label: "r/RedditMasterClasses",
                Image: "https://b.thumbs.redditmedia.com/xMWJpYPqLqSK9R_afYkZSIZ3nefL8A3YHsSZzPHJpIM.png",
                members: "40,010",
            },
            {
                Label: "r/likeus",
                Image: "https://b.thumbs.redditmedia.com/J_Q4zxlwp1j9KQIJxiwWc-ayp-lpmP2SKT4zZyO2R6M.png",
                members: "34,717,533",
            },
            {
                Label: "r/holymyredbull",
                Image: "https://a.thumbs.redditmedia.com/sCO58TQf6brYMP1RIXghuRkkU77Acghaksqus6Uoh_0.png",
                members: "34,717,533",
            },
        ],
    },
    CurrentChannelInfo: {
        Label: "r/Home",
        Content: "Your personal Reddit frontpage. Come here to check in with your favorite communities.",
    },
};

const Posts = [{
        Title: "American breakfast, as envisioned by a European",
        Channel: "r/AskReddit",
        Label: "Health",
        LabelColor: "blue",
        Votes: 0,
        Comments: 0,
    },
    {
        Title: "'If we annoy everyone, they will support our cause'",
        Channel: "r/funny",
        Votes: "2.2k",
        Comments: 0,
    },
    {
        Title: "[Postgame Thread] Clemson Defeats Notre Dame 34-10",
        Channel: "r/AskReddit",
        Label: "Postgame Thread",
        LabelColor: "#000",
        Votes: "6k",
        Comments: "5",
    },
    {
        Title: "Trump contradicts top U.S. officials, suggests without evidence China behind cyberattack",
        Channel: "r/JusticeServed",
        Votes: "77",
        Comments: "200",
    },
    {
        Title: "I mean...have you tried?",
        Channel: "r/pcmasterrace",
        Label: "Fan Made",
        LabelColor: "green",
        Votes: "0",
        Comments: "5.5k",
    },
    {
        Title: "Dutch government bans air travel from UK after discovering virus variant",
        Channel: "r/CFB",
        Votes: "6",
        Comments: "8.5k",
    },
    {
        Title: "Rosie looking all cute right after she got caught unwrapping all the gifts under the tree.",
        Channel: "r/WhitePeopleTwitter",
        Label: "Story",
        LabelColor: "blue",
        Votes: "999",
        Comments: "77",
    },
    {
        Title: "Amazingly well done tattoo to cover up missing fingertips",
        Channel: "r/gifs",
        Votes: "657",
        Comments: "34",
    },
    {
        Title: "Amazingly well done tattoo to cover up missing fingertips",
        Channel: "r/gifs",
        Votes: "657",
        Comments: "34",
    },
    {
        Title: "Desktop workstation with 1 GPU. Will the integrity of the X server be maintained if I'm passing the GPU to a container with `nvidia-docker` ?",
        Channel: "r/docker",
        Label: "Confused",
        LabelColor: "orange",
        Votes: "999",
        Comments: "77",
    },
    {
        Title: "Rosie looking all cute right after she got caught unwrapping all the gifts under the tree.",
        Channel: "r/WhitePeopleTwitter",
        Label: "Story",
        LabelColor: "blue",
        Votes: "999",
        Comments: "77",
    },
    {
        Title: "I mean...have you tried?",
        Channel: "r/pcmasterrace",
        Label: "Fan Made",
        LabelColor: "green",
        Votes: "0",
        Comments: "5.5k",
    },
    {
        Title: "Dutch government bans air travel from UK after discovering virus variant",
        Channel: "r/CFB",
        Votes: "6",
        Comments: "8.5k",
    },
    {
        Title: "One Sentence for Every AWS Instance Type",
        Channel: "r/devops",
        Votes: "98",
        Comments: "9.5k",
    },
    {
        Title: "Delete files from Windows > recycle bin?",
        Channel: "r/synology",
        Votes: "1.2k",
        Comments: "12.5k",
    },
    {
        Title: "Desktop workstation with 1 GPU. Will the integrity of the X server be maintained if I'm passing the GPU to a container with `nvidia-docker` ?",
        Channel: "r/docker",
        Label: "Confused",
        LabelColor: "orange",
        Votes: "999",
        Comments: "77",
    },
    {
        Title: "'If we annoy everyone, they will support our cause'",
        Channel: "r/funny",
        Votes: "2.2k",
        Comments: 0,
    },
    {
        Title: "[Postgame Thread] Clemson Defeats Notre Dame 34-10",
        Channel: "r/AskReddit",
        Label: "Postgame Thread",
        LabelColor: "#000",
        Votes: "6k",
        Comments: "5",
    },
    {
        Title: "Trump contradicts top U.S. officials, suggests without evidence China behind cyberattack",
        Channel: "r/JusticeServed",
        Votes: "77",
        Comments: "200",
    },
    {
        Title: "I mean...have you tried?",
        Channel: "r/pcmasterrace",
        Label: "Fan Made",
        LabelColor: "green",
        Votes: "0",
        Comments: "5.5k",
    },
    {
        Title: "Dutch government bans air travel from UK after discovering virus variant",
        Channel: "r/CFB",
        Votes: "6",
        Comments: "8.5k",
    },
];

export {
    Sidebar,
    Widgets,
    Posts,
    ProfileDropdownItems,
    CommentDropdownItems,
    UserInfo,
};