import React from "react";
import { useNavigate } from "react-router-dom";
import { listofPersons } from "./../Constant/data";
import UsersCard from "./UsersCard";
import { Button, Icon } from "semantic-ui-react";
function Users() {
    const navigate = useNavigate();
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}>
                {listofPersons?.map((el) => (
                    <UsersCard user={el} key={el.id} />
                ))}
            </div>
            <Button
                icon="home"
                onClick={() => navigate("/")}
                label={{
                    as: "a",
                    basic: true,
                    pointing: "right",
                    content: "HOME",
                }}
                labelPosition="right"
            />
            <Button
                icon
                inverted
                color="yellow"
                labelPosition="right"
                onClick={() => navigate(1)}>
                Next
                <Icon name="right arrow" />
            </Button>
        </>
    );
}

export default Users;
