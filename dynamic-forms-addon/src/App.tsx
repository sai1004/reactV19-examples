import React, { FormEvent, useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Nomination {
    name: string;
    relation: string;
    percentage: number;
}

interface ProfileForm {
    fullName: string;
    email: string;
    nominations: Nomination[];
}

function App() {
    const [profileForm, setProfileForm] = useState<ProfileForm>({
        fullName: "",
        email: "",
        nominations: [],
    });

    const handleProfileFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget);
        const { name, value } = e.currentTarget;
        setProfileForm((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const addNomination = () => {
        setProfileForm({
            ...profileForm,
            nominations: [...profileForm.nominations, { name: "", relation: "", percentage: 0 }],
        });
    };

    const handleNominationChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.currentTarget;
        const updatedNominations = [...profileForm.nominations];
        updatedNominations[index] = {
            ...updatedNominations[index],
            [name]: value,
        };
        setProfileForm({ ...profileForm, nominations: updatedNominations });
    };

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(profileForm);
    };

    return (
        <main className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Profile Form</h2>
            <div className="form">
                <form onSubmit={handleFormSubmit}>
                    <Input
                        type="text"
                        name="fullName"
                        value={profileForm.fullName}
                        placeholder="Enter Full Name"
                        onChange={handleProfileFormChange}
                        className="mb-2"
                    />

                    <Input
                        type="text"
                        name="email"
                        value={profileForm.email}
                        placeholder="Enter Email.."
                        onChange={handleProfileFormChange}
                        className="mb-2"
                    />

                    <h3 className="text-lg font-semibold mb-2">Nominations</h3>
                    {profileForm?.nominations.map((nomination: Nomination, index: number) => {
                        return (
                            <div key={index}>
                                <div className="text-center">
                                    <h5>Nomination {index + 1}</h5>
                                </div>
                                <Input
                                    type="text"
                                    name="name"
                                    value={nomination.name}
                                    placeholder="Enter Name"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        handleNominationChange(e, index);
                                    }}
                                    className="mb-2"
                                />

                                <Input
                                    type="text"
                                    name="relation"
                                    value={nomination.relation}
                                    placeholder="Enter relation.."
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        handleNominationChange(e, index);
                                    }}
                                    className="mb-2"
                                />

                                <Input
                                    type="text"
                                    name="percentage"
                                    value={nomination.percentage}
                                    placeholder="Enter percentage.."
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        handleNominationChange(e, index);
                                    }}
                                    className="mb-2"
                                />
                            </div>
                        );
                    })}

                    <Button className="w-100 mb-4" onClick={addNomination}>
                        Add Nomination
                    </Button>

                    <Button className="w-100" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </main>
    );
}

export default App;
