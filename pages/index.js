import MeetupList from "../components/meetups/MeetupList";

const Dummy_Meetups = [
  {
    id: 1,
    title: "First Meetup",
    image:
      "https://i.pinimg.com/736x/75/7e/f0/757ef0f9f87e00580b3f5a991ea87410.jpg",
    address: "Some address 5,12345 Some city",
  },
  {
    id: 2,
    title: "Second Meetup",
    image:
      "https://i.pinimg.com/736x/75/7e/f0/757ef0f9f87e00580b3f5a991ea87410.jpg",
    address: "Some address 10,12345 Some city",
  },
  {
    id: 3,
    title: "Third Meetup",
    image:
      "https://i.pinimg.com/736x/75/7e/f0/757ef0f9f87e00580b3f5a991ea87410.jpg",
    address: "Some address 15,12345 Some city",
  },
];

function homePage() {
  return <MeetupList meetups={Dummy_Meetups} />;
}

export default homePage;
