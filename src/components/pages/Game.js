import React, { useEffect, useState } from 'react'
import { Form, Button, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { cancel, queryWithItem, query } from './../../action/play';
const Game = ({ cancel, queryWithItem, query, history, game }) => {
    const list =
        [["forward", "playerStatus", "breakWall", "switchLight", "backward", "open", "right", "left", "useFlashLight", "list", "look", "checkKey", "check"],
        ["useKey", "buy", "sell"]];
    const [queryValue, setQueryValue] = useState("forward");
    const [queryValueItem, setQueryValueItem] = useState("useKey");
    const [selectedItem, setSelectedItem] = useState(game.items.length === 0 ? "" : game.items[0].keyType);

    useEffect(() => {
        query(null, history)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handelCancel = () => {
        cancel(history);
    }

    const change = (e) => {
        setQueryValue(e.target.value)
    }
    const change1 = (e) => {
        setQueryValueItem(e.target.value)
    }
    const changeSelectedItem = (e) => {
        setSelectedItem(e.target.value)
    }

    const handelQuery = () => {
        query(queryValue, history);
    }

    const handelQueryWithItem = () => {
        console.log(selectedItem);
        queryWithItem(selectedItem, queryValueItem, history);
    }


    return (
        <>
            <div className="m-5">
                <div>
                    response massege : {game.res}
                </div>
                <div>
                    Gold : {game.numberOfGold.price}
                </div>
                <div>
                    Alive : {game.dead ? "yes" : "no"}
                </div>
            </div>
            <div className="m-5">
                <ListGroup>
                    {game.playersName.map((item, index) => <ListGroup.Item key={index}>{item}</ListGroup.Item>)}
                </ListGroup>
            </div>
            <div className="m-5">
                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" >
                    Query
                </Form.Label>
                <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                    value={queryValue}
                    onChange={change}
                >
                    {list[0].map((item, index) => <option key={index} value={item}>{item}</option>)}

                </Form.Control>
                <Button onClick={handelQuery} className="btn-block mt-3">Query</Button>
            </div>
            <div className="m-5">
                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" >
                    Query With Item
            </Form.Label>
                <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                    value={queryValueItem}
                    onChange={change1}
                >
                    {list[1].map((item, index) => <option key={index} value={item}>{item}</option>)}

                </Form.Control>
                <Form.Label>
                    Item
                </Form.Label>
                <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                    value={selectedItem}
                    onChange={changeSelectedItem}
                >
                    {game.items.map((item, index) => <option key={index} value={item.keyType}>{item.keyType}</option>)}

                </Form.Control>
                <Button variant="secondary" onClick={handelQueryWithItem} className="btn-block mt-3">Query With Item </Button>
            </div>
            <div className="m-5">
                <Button onClick={handelCancel} variant="danger" className="btn-block mt-3">Exit Game</Button>
            </div>

        </>
    )
}
const mapStateToProps = (state) => ({
    game: state.game
});
export default connect(mapStateToProps, { cancel, queryWithItem, query })(Game)
