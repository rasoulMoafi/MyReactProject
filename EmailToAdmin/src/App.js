import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oz52spd",
        "template_b7lltye",
        e.target,
        "yhq8MZ3FjLWB4KQxQ"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("پیام شما با موفقیت ارسال شد", {
              position: "top-right",
              closeOnClick: true,
            });
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-md-4 bg-white p-3">
          <h2 className="mt-5 pb-5 ">ارسال پیام به مدیریت</h2>
          <form onSubmit={sendEmail}>
            <div className="form-group py-2">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="نام خود را وارد کنید"
              ></input>
            </div>
            <div className="form-group py-2">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
              ></input>
            </div>
            <div className="form-group py-2">
              <textarea
                className="form-control"
                name="message"
                placeholder="پیام شما"
              ></textarea>
            </div>
            <div className="form-group py-2">
              <button
                className="btn btn-success w-100 text-white my-3"
                type="submit"
              >
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
