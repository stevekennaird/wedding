import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IValidationError {
  message: string;
}

const ValidationError = ({ message }: IValidationError) => {
  return (
    <span role="alert" className="validation-error">
      {message}
    </span>
  );
};

interface IRsvpFormInput {
  name: string;
  email: string;
  weddingGuestCount: number;
  receptionGuestCount: number;
  comments: string | null | undefined;
}

function RsvpForm() {
  // When submitted, show a message saying about letting us know a booking reference when they have one
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRsvpFormInput>();

  const [postSubmitMessageType, setPostSubmitMessageType] = useState<
    "WEDDING" | "RECEPTION" | "NEITHER" | null
  >(null);

  const onSubmit: SubmitHandler<IRsvpFormInput> = (data) => {
    if (data.weddingGuestCount > 0) {
      setPostSubmitMessageType("WEDDING");
    } else if (data.receptionGuestCount > 0) {
      setPostSubmitMessageType("RECEPTION");
    } else {
      setPostSubmitMessageType("NEITHER");
    }

    const postData = new URLSearchParams();
    postData.append("form-name", "rsvp-form");
    postData.append("name", data.name);
    postData.append("email", data.email);
    postData.append("weddingGuestCount", data.weddingGuestCount.toString());
    postData.append("receptionGuestCount", data.receptionGuestCount.toString());
    postData.append("comments", data.comments || "(none)");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: postData,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lg:row-span-4">
      <h2 className="text-2xl font-semibold mb-2 block fancy primary-color">
        RSVP
      </h2>
      {postSubmitMessageType && (
        <>
          <div>
            {postSubmitMessageType === "WEDDING" && (
              <p>
                Great 🎉 we'll be so happy to see you there! If you book at the
                Lindos Mare Hotel to stay with us, make sure to let Steve or
                Sharon know your booking reference, and we'll inform the hotel.
              </p>
            )}
            {postSubmitMessageType === "RECEPTION" && (
              <p>
                That's cool 😎 we'll let you know the reception date and
                location once we've figured that out.
              </p>
            )}
            {postSubmitMessageType === "NEITHER" && (
              <p>Wow, you're dead to us ☠️. Kidding, or are we?!</p>
            )}
          </div>
        </>
      )}
      {!postSubmitMessageType && (
        <div>
          <p>Please let us know if you're able to join us:</p>
          <form
            id="rsvp-form"
            name="rsvp"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-field">
              <label htmlFor="txtName">Your name</label>
              <input
                id="txtName"
                type="text"
                {...register("name", { required: true, maxLength: 20 })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.message && (
                <ValidationError message={errors.name.message} />
              )}
            </div>

            <div className="form-field">
              <label htmlFor="txtEmail">Your email address</label>
              <input
                id="txtEmail"
                type="email"
                {...register("email", { required: true, maxLength: 250 })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.message && (
                <ValidationError message="A valid email address is required" />
              )}
            </div>

            <div className="form-field">
              <label htmlFor="txtWeddingGuestCount">
                How many of you will be joining us in Lindos?
              </label>
              <input
                id="txtWeddingGuestCount"
                type="number"
                min="0"
                max="10"
                {...register("weddingGuestCount", {
                  required: true,
                  min: 0,
                  max: 10,
                })}
                aria-invalid={errors.weddingGuestCount ? "true" : "false"}
              />
              {errors.weddingGuestCount?.message && (
                <ValidationError message={errors.weddingGuestCount.message} />
              )}
            </div>

            <div className="form-field">
              <label htmlFor="txtReceptionGuestCount">
                How many of you will come to the reception? (Depending on the
                date, of course)&hellip;
              </label>
              <input
                id="txtReceptionGuestCount"
                type="number"
                min="0"
                max="10"
                {...register("receptionGuestCount", {
                  required: true,
                  min: 0,
                  max: 10,
                })}
                aria-invalid={errors.receptionGuestCount ? "true" : "false"}
              />
              {errors.receptionGuestCount?.message && (
                <ValidationError message={errors.receptionGuestCount.message} />
              )}
            </div>

            <div className="form-field">
              <label htmlFor="txtComments">Any other comments (optional)</label>
              <textarea
                id="txtComments"
                {...register("comments", { required: false, maxLength: 2000 })}
                aria-invalid={errors.comments ? "true" : "false"}
              />
              {errors.comments?.type === "maxLength" && (
                <ValidationError message="Don't go crazy, keep it under 2k characters please" />
              )}
            </div>

            <div className="mt-4 text-right">
              <button
                type="submit"
                className="bg-[#562075] text-white text-sm px-4 py-2 rounded-md font-semibold hover:bg-[#6e3192]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default RsvpForm;
