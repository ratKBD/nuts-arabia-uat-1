import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@modules/layout/templates";
import { ReactElement } from "react";
import PageHeader from "@modules/products/components/header/PageHeader";
import { useForm } from "react-hook-form";
import { notifyError, notifySuccess } from "@services/Toast";
import { emailRegex } from "@lib/util/regex";
import {
  // FiUser,
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiTruck,
  FiPhoneCall,
  FiCreditCard,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import InputArea from "@modules/account/components/form/InputArea";
import Error from "@modules/account/components/form/Error";
import Label from "@modules/account/components/form/Label";

const ContactUs = () => {
  const [name, setName] = useState<any>({
    name: "name",
    value: "",
  });

  const [email, setEmail] = useState<any>({
    name: "email",
    value: "",
  });
  const [subject, setSubject] = useState<any>({
    name: "subject",
    value: "",
  });
  const [message, setMessage] = useState<any>({
    name: "message",
    value: "",
  });
  const [inputChar, setInputChar] = useState<any>();
  const [resetForm, setResetForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [nameMsg, setNameMsg] = useState<any>("");
  const [emailMsg, setEmailMsg] = useState<any>("");
  const [subjectMsg, setSubjectMsg] = useState<any>("");
  const [messageMsg, setMessageMsg] = useState<any>("");

  const [nameMsgD, setNameMsgD] = useState<any>("");
  const [emailMsgD, setEmailMsgD] = useState<any>("");
  const [subjectMsgD, setSubjectMsgD] = useState<any>("");
  const [messageMsgD, setMessageMsgD] = useState<any>("");

  const [nameErr, setNameErr] = useState<any>(true);
  const [emailErr, setEmailErr] = useState<any>(true);
  const [subjectErr, setSubjectErr] = useState<any>(true);
  const [messageErr, setMessageErr] = useState<any>(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  // useEffect(() => {
  //   setResetForm({
  //     name: name,
  //     email: email,
  //     subject: subject,
  //     message: message,
  //   })
  // }, [name, email, subject, message])

  // const submitHandler = () => {
  //   // reset({})
  //   console.log("contactName", name)
  //   console.log("contactEmail", email)
  //   console.log("contactSubject", subject)
  //   console.log("contactMessage", message)
  //   console.log("resetForm", resetForm)
  //   setResetForm({
  //     name: name,
  //     email: email,
  //     subject: subject,
  //     message: message,
  //   })
  //   if (
  //     resetForm.name.length === 0 ||
  //     resetForm.subject.length === 0 ||
  //     resetForm.email.length === 0 ||
  //     resetForm.message.length === 0
  //   ) {
  //     notifyError("Please fill the contact form before sending.")
  //   } else if (
  //     resetForm.name.length > 0 ||
  //     resetForm.subject.length > 0 ||
  //     resetForm.email.length > 0 ||
  //     resetForm.message.length > 0
  //   ) {
  //     notifySuccess(
  //       "your message sent successfully. We will contact you shortly."
  //     )
  //   }

  //   setName("")
  //   setEmail("")
  //   setMessage("")
  //   setSubject("")
  // }

  const ContactData = [
    {
      id: 1,
      className: "bg-emerald-100",
      contact: "customercare@nutsarabia.com",
      info: "Interactively grow empowered for process-centric total linkage.",
      title: "Email Us",
      icon: FiMail,
    },
    {
      id: 2,
      className: "bg-yellow-100",
      contact: "+97143990014",
      info: "Distinctively disseminate focused solutions clicks-and-mortar ministate.",
      title: "Call Us",
      icon: FiPhoneCall,
    },
    {
      id: 3,
      className: "bg-indigo-100",
      contact: "",
      info: "Al Alam Al Lazeez Trading L.L.C Pox Box: 118859, Dubai, UAE",
      title: "Location",
      icon: FiMapPin,
    },
  ];

  const handleValueChange = (e: any) => {
    let inputDetails: any;

    inputDetails = { name: e.target.name, value: e.target.value };
    console.log("inputDetails-->", inputDetails);

    switch (inputDetails.name) {
      case "name": {
        setName({
          name: inputDetails.name,
          value: inputDetails.value,
        });

        console.log("valueCheck--->", inputDetails.value);
        if (inputDetails.value) {
          setNameMsgD("");
          setNameMsg("");
          setNameErr(false);
          if (inputDetails.value.length < 3 || inputDetails.value.length > 15) {
            setNameErr(true);
            setNameMsgD(
              "Name should have more than 3 characters and less than 15 characters!"
            );
          }
          // if (!/^[a-zA-Z]+$/.test(inputDetails.value.trim())) {
          //   setNameErr(true)
          //   setNameMsgD("Improper standard of First Name")
          // }
        } else {
          setNameErr(true);
          setNameMsgD("First Name is required");
        }

        break;
      }

      case "email": {
        setEmail({
          email: inputDetails.name,
          value: inputDetails.value,
        });
        console.log("mailCheck", inputDetails.value);
        if (inputDetails.value.trim()) {
          setEmailMsgD("");
          setEmailMsg("");
          setEmailErr(false);
          console.log("errs email", emailErr);
          if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              inputDetails.value
            )
          ) {
            setEmailErr(true);
            setEmailMsgD("Improper standard of email");
          }
        } else {
          setEmailErr(true);
          setEmailMsgD("email is required");
        }
        break;
      }

      case "subject": {
        setName({
          subject: inputDetails.name,
          value: inputDetails.value,
        });

        console.log("valueCheck--->", inputDetails.value);
        if (inputDetails.value.trim()) {
          setSubjectMsgD("");
          setSubjectMsg("");
          setSubjectErr(false);
          if (inputDetails.value.length < 3 || inputDetails.value.length > 15) {
            setSubjectErr(true);
            setSubjectMsgD(
              "First Name should have more than 3 characters and less than 15 characters!"
            );
          }
        } else {
          setSubjectErr(true);
          setSubjectMsgD("Subject is required");
        }

        break;
      }
      case "message": {
        setMessage({
          message: inputDetails.name,
          value: inputDetails.value,
        });

        console.log("valueCheck--->", inputDetails.value);
        if (inputDetails.value.trim()) {
          setMessageMsgD("");
          setMessageMsg("");
          setMessageErr(false);
          if (
            inputDetails.value.length < 10 ||
            inputDetails.value.length > 250
          ) {
            setMessageErr(true);
            setMessageMsgD(
              "Message should have more than 3 characters and less than 15 characters!"
            );
          }
        } else {
          setMessageErr(true);
          setMessageMsgD("Message is required");
        }
        break;
      }
    }
  };

  const showError = () => {
    console.log("fnCheck", name.value);
    if (name.value.length === 0) {
      setNameErr(true);
      setNameMsg("Name is required");
    } else setNameMsg(nameMsgD);

    if (email.value.length === 0) {
      setEmailErr(true);
      setEmailMsg("Email is required");
    } else setEmailMsg(emailMsgD);

    if (subject.value.length === 0) {
      setSubjectErr(true);
      setSubjectMsg("Subject is required");
    } else setSubjectMsg(subjectMsgD);

    if (message.value.length === 0) {
      setMessageErr(true);
      setMessageMsg("Message is required");
    } else setMessageMsg(messageMsgD);
    // console.log("country.value", country.value)
  };

  return (
    <>
      <PageHeader title="Contact Us" />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-serif">
            {ContactData.map((data) => (
              <div key={data.id} className="border p-10 rounded-lg text-center">
                <span
                  className="flex justify-center text-4xl mb-4"
                  style={{ color: "#592316" }}
                >
                  <data.icon />
                </span>
                <h5 className="text-xl mb-2 font-bold">{data.title}</h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <a
                    href={`mailto:${data.contact}`}
                    style={{ color: "#592316" }}
                  >
                    {data.contact}
                  </a>{" "}
                  {data.info}
                </p>
              </div>
            ))}
          </div>
          <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
            <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
              <Image
                width={874}
                height={874}
                src="/contact-us.png"
                alt="logo"
                className="block w-auto"
              />
            </div>
            <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
              {/* <form */}
              <div
                // onSubmit={handleSubmit(submitHandler)}
                className="w-full mx-auto flex flex-col justify-center"
              >
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-3">
                    {`For any support just send your query`}
                  </h3>
                  <p className="text-base opacity-90 leading-7">
                    {`Collaboratively promote client-focused convergence vis-a-vis
                    customer directed alignments via plagiarize strategic users
                    and standardized infrastructures.`}
                  </p>
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <div className="w-full md:w-1/2 ">
                      <InputArea
                        minLength={3}
                        maxLength={30}
                        register={register}
                        label="Your Name"
                        name="name"
                        setAState={setName}
                        type="text"
                        placeholder="Enter Your Name"
                        inputValue={name}
                        setInputValue={setName}
                        errMsg={nameMsg}
                        handleValueChange={(e: any) => handleValueChange(e)}
                      />
                      <Error errorName={errors.name} />
                    </div>
                    <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 mt-2 md:mt-0">
                      <InputArea
                        minLength={3}
                        errFor={`Email Address`}
                        regex={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                        register={register}
                        label="Your Email"
                        name="email"
                        type="email"
                        setAState={setEmail}
                        placeholder="Enter Your Email"
                        inputValue={email}
                        setInputValue={setEmail}
                        errMsg={emailMsg}
                        handleValueChange={(e: any) => handleValueChange(e)}
                      />
                      <Error errorName={errors.email} />
                    </div>
                  </div>
                  <div className="relative">
                    <InputArea
                      minLength={3}
                      maxLength={50}
                      register={register}
                      label="Subject"
                      name="subject"
                      type="text"
                      setAState={setSubject}
                      placeholder="Enter Your Subject"
                      inputValue={subject}
                      setInputValue={setSubject}
                      errMsg={subjectMsg}
                      handleValueChange={(e: any) => handleValueChange(e)}
                    />
                    <Error errorName={errors.subject} />
                  </div>
                  <div className="relative mb-4">
                    <Label label="Message" />
                    <textarea
                      {...register("message", {
                        required: `Message is required!`,
                      })}
                      name="message"
                      className="px-4 py-3 flex items-center w-full rounded appearance-none
                      opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0
                      bg-white border border-gray-300 focus:shadow-none focus:outline-none
                       focus:border-gray-500 placeholder-body"
                      autoComplete="off"
                      spellCheck="false"
                      rows={4}
                      placeholder="Write your message here"
                      // value={message}
                      onChange={(e) => handleValueChange(e)}
                    ></textarea>
                    {messageMsg && (
                      <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
                        <span>{messageMsg}</span>
                      </div>
                    )}
                    {/* <input
                      type="text"
                      className="px-4 py-3 flex items-center w-full rounded appearance-none
                      opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0
                      bg-white border border-gray-300 focus:shadow-none focus:outline-none
                       focus:border-gray-500 placeholder-body"

                    /> */}
                    <Error errorName={errors.message} />
                  </div>
                  <div className="relative">
                    {!nameErr && !emailErr && !subjectErr && !messageErr ? (
                      <button
                        // type="submit"
                        data-variant="flat"
                        className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none  text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white  h-12 mt-1 text-sm lg:text-base w-full sm:w-auto "
                        style={{ background: "#301B28" }}
                        onClick={() => {
                          let contactDetails = {
                            contact_details: {
                              name: name.value,
                              email: email.value,
                              subject: subject.value,
                              message: message.value,
                            },
                          };
                          console.log("contactDetails", contactDetails);
                          notifySuccess(
                            "your message sent successfully. We will contact you shortly."
                          );
                        }}
                      >
                        {`Send Message`}
                      </button>
                    ) : (
                      <button
                        // type="submit"
                        data-variant="flat"
                        className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none  text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white  h-12 mt-1 text-sm lg:text-base w-full sm:w-auto "
                        style={{ background: "#301B28" }}
                        onClick={() => showError()}
                      >
                        {`Send Message`}
                      </button>
                    )}

                    {/* <button
                  type="submit"
data-variant="flat"
className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none  text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white  h-12 mt-1 text-sm lg:text-base w-full sm:w-auto "
style={{ background: "#301B28" }}
>
{`Send Message`}
</button> */}
                  </div>
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ContactUs.getLayout = (page: ReactElement) => {
  return (
    <Layout title="Contact Us" description="This is contact us page">
      {page}
    </Layout>
  );
};

export default ContactUs;
