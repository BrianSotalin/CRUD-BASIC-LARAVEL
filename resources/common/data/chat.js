import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

const chats = [
    {
        id: 1,
        roomId: 1,
        status: "offline",
        image: avatar2,
        name: "John Howard",
        penddingmsg : "",
        description: "Hey! there I'm available",
        time: "05 min",
    },
    {
        id: 2,
        roomId: 2,
        status: "online",
        image: "Null",
        color: "primary",
        name: "Galen Rizo",
        penddingmsg: "01",
        description: "I've finished it! See you so",
        time: "12 min",
    },
    {
        id: 3,
        roomId: 3,
        status: "online",
        image: avatar3,
        name: "Bernard Spencer",
        penddingmsg : "",
        description: "This theme is awesome!",
        time: "24 min",
    },
    {
        id: 4,
        roomId: 4,
        status: "intermediate",
        image: avatar4,
        name: "Annie Holder",
        penddingmsg : "",
        description: "Nice to meet you",
        time: "1 hr",
    },
    {
        id: 5,
        roomId: 5,
        status: "offline",
        image: "Null",
        color:"success",
        penddingmsg : "",
        name: "Vernon Smith",
        description: "Wow that's great",
        time: "3 hrs",
    },
    {
        id: 6,
        roomId: 6,
        status: "online",
        image: avatar8,
        name: "Annie Holder",
        penddingmsg : "",
        description: "Nice to meet you",
        time: "5 hrs",
    },
    {
        id: 7,
        roomId: 7,
        status: "online",
        image: avatar7,
        name: "Vernon Smith",
        penddingmsg : "",
        description: "Wow that's great",
        time: "6 Hrs",
    },
]
const messages = [
    {
      id: 1,
      roomId: 1,
      image: avatar2,
      sender: "John Howard",
      message: "Good morning !",
      createdAt: "10.00",
    },
    {
      id: 2,
      roomId: 1,
      image: avatar4,
      sender: "Annie Holder",
      message: "Good morning, How are you? What about our next meeting?",
      createdAt: "10.00",
    },
    {
      id: 3,
      roomId: 1,
      image: avatar2,
      sender: "John Howard",
      message: "Yeah everything is fine",
      createdAt: "10.04",
    },
    {
      id: 4,
      roomId: 1,
      image: avatar2,
      sender: "John Howard",
      message: "Next meeting tomorrow 10.00AM",
      createdAt: "10.04",
    },
    {
      id: 5,
      roomId: 1,
      image: avatar4,
      sender: "Annie Holder",
      message: "Wow that's great",
      createdAt: "10.06",
    },
    {
        id: 6,
        roomId: 1,
        image: avatar2,
        sender: "John Howard",
        message: "Ok Thanks!! Meet you very soon",
        createdAt: "10.07",
      },
  ]

const MOCK_DATA = {
    chats,
    messages
}

export default MOCK_DATA;