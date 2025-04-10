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

function meetupDetails() {
  const router = useRouter();
  const path = router.query.meetupId;
  const meetup = Dummy_Meetups.find((meet) => meet.id === Number(path));

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={meetup.image} />
      <h2>{meetup.title}</h2>
      <address>{meetup.address}</address>
    </div>
  );
}

export default meetupDetails;
