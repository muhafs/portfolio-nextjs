import {
    Html,
    Head,
    Body,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    sender: string;
    message: string;
};

export default function ContactFormEmail({
    sender,
    message,
}: ContactFormEmailProps) {
    return (
        <Html lang="en" dir="ltr">
            <Head />

            <Preview>New message from your portfolio site</Preview>

            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="my-10 rounded-md border border-black/10 bg-white px-10 py-4">
                            <Heading className="leading-tight">
                                You received the following message from the
                                contact form
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender's email is: {sender}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
