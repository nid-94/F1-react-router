import React from "react";
import { Navigate, useMatch, useNavigate, useParams } from "react-router-dom";
import { listofPersons } from "./../Constant/data";
import { Card, Icon, Image, Button } from "semantic-ui-react";

function Profile() {
    // use params
    const params = useParams();
    const foundUser = listofPersons.find((el) => el.id == params.id);
    const navigate = useNavigate();
    // use match
    // const match = useMatch("/user/profile/:id");
    // const foundUser = listofPersons.find((el) => el.id == match.params.id);
    console.log(params.id);
    return (
        <div>
            <h1>Profile</h1>
            <Card>
                <Image src="/images/avatar/large/daniel.jpg" wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Name :{foundUser.name}</Card.Header>
                    <Card.Meta>Age : {foundUser.age}</Card.Meta>
                    <Card.Description>Job :{foundUser.job}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name="user" />
                        10 Friends
                    </a>
                </Card.Content>
            </Card>
            <Button icon labelPosition="left" onClick={() => navigate(-1)}>
                Previous
                <Icon name="left arrow" />
            </Button>
        </div>
    );
}

export default Profile;
