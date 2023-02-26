function RsvpForm() {
  // When submitted, show a message saying about letting us know a booking reference when they have one
  return (
    <div className="lg:row-span-5">
      <h2 className="fancy primary-color text-4x font-bold">RSVP</h2>
      <p>Please let us know if you're able to join us:</p>
      <form>
        <div>
          <label>Your name</label>
          <input type="text" required />
        </div>
      </form>
    </div>
  );
}

export default RsvpForm;
