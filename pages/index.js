import { MongoClient } from "mongodb";
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

function homePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Mahathi:V0bHOiUIKmz50utn@cluster0.hmlhj5s.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
  };
}

export default homePage;
