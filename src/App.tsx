import BodyContainer from "./components/layout/BodyContainer";
import DetailItem from "./components/layout/DetailItem";
import Header from "./components/layout/Header";
import RsvpForm from "./components/rsvp/RsvpForm";

function App() {
  return (
    <div>
      <Header />
      <BodyContainer>
        <DetailItem title="Welcome" colspan={2}>
          <p>
            Here you should find all the details you need about our wedding day.
            We'd love for you to join us, and for those who can't, we'll be
            holding a reception in the UK in late summer 2024.
          </p>
          <div className="fancy primary-color text-right text-xl font-bold leading-tight pr-2">
            Steve and Sharon
            <br />x
          </div>
        </DetailItem>
        <RsvpForm />
        <DetailItem title="When is it?">
          <p>
            The wedding day is Friday 24th May 2024. Steve and Sharon will be
            staying at the hotel from 15th to the 29th. The wedding will be in
            the afternoon, 4:30pm.
          </p>
        </DetailItem>
        <DetailItem title="Where is it?">
          <p>
            The wedding will be on the beach in Lindos, and we'll be staying at
            the{" "}
            <a href="https://lindosmare.gr/" target="_blank">
              Lindos Mare Hotel
            </a>
            . (
            <a href="https://goo.gl/maps/JGHE2yPoH17g9jgS6" target="_blank">
              Map
            </a>
            )
          </p>
        </DetailItem>
        <DetailItem title="Do we need to book the same hotel?">
          <p>
            It's up to you! It'd be great for our friends and family to take
            over the hotel, but if you choose to stay elsewhere nearby and come
            to our hotel for the wedding day, that's totally fine!
          </p>
        </DetailItem>
        <DetailItem title="Will you unfriend me if I can't come?">
          <p>
            Maybe. We'll probably get over it though! Kidding...we know it's a
            lot to ask, and there's always the reception later in 2024 (date
            TBC) which we're looking to hold in Folkestone, so just come to that
            instead!
          </p>
        </DetailItem>
        <DetailItem title="Who should we book with?">
          <p>We'd recommend TUI...</p>
        </DetailItem>
        <div>09</div>
        <div>01</div>
        <div>09</div>
        <div>01</div>
        <div>09</div>
        <div>01</div>
        <div>09</div>
        <div>01</div>
        <div>09</div>
        <div>01</div>
        <div>09</div>
      </BodyContainer>
    </div>
  );
}

export default App;
