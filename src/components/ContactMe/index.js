import React from 'react';
import { FormInput } from './ContactmeElements';
import { Container,FormWrap, Icon, FormContent,Form,FormH1, FormButton, FormLabel } from './ContactmeElements';
const ContactMe = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Vedanshi</Icon>
                    <FormContent>
                        <Form action="mailto:vedanshi283@gmail.com" method="post" enctype="text/plain">
                            <FormH1>Talk to me</FormH1>
                            <FormLabel htmlFor='for'>Your Name</FormLabel>
                            <FormInput name="YourName" type='text' required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput name="YourEmail" type='email' required />
                            <FormLabel htmlFor='for'>Message</FormLabel>
                            <FormInput type='textarea' name="YourMsg" required />
                            <FormButton type='submit'>Send</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default ContactMe;
