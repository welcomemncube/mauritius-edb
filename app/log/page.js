'use client'
import { Form, TextArea,Button } from "@carbon/react";
import { Stack } from "@carbon/react";

export default function LogIssues() {
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: '2rem'}}>Logging Ticket</h1>
            <div style={{display: 'flex', justifyContent: 'center',margin: '3rem'}}>
            <Form style={{width: '700px'}}>
                <Stack gap={7}>
                    <TextArea 
                        labelText="Issue Description"  
                        placeholder="Tell me about the issue you are" 
                        id="issue" 
                        type="text"

                    />
                    <Button style={{marginLeft: '15rem'}}>Submit Ticket</Button>
                </Stack>
            </Form>
            </div>
        </div>

    )
}