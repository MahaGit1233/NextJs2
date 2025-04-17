import { useRouter } from "next/router";

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

const defaultMeetup = {
  title: "Unknown Meetup",
  image:
    "https://i.pinimg.com/736x/d9/59/49/d95949cdbd9997d726ed8be5853d6143.jpg",
  address: "No address available",
};

function meetupDetails({ meetup }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={meetup.image} />
      <h2>{meetup.title}</h2>
      <address>{meetup.address}</address>
    </div>
  );
}

export function getStaticPaths() {
  return {
    fallback: true,
    paths: Dummy_Meetups.map((meetup) => ({
      params: { meetupId: meetup.id.toString() },
    })),
  };
}

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const meetup = Dummy_Meetups.find((meet) => meet.id === Number(meetupId));
  return {
    props: { meetup: meetup || defaultMeetup },
  };
}

export default meetupDetails;
