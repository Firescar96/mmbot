/* mmbot - a constant interval market maker bot
Copyright (C) 2018  James Lovejoy

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. */

package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/rpc"
	"net/rpc/jsonrpc"

	"golang.org/x/net/websocket"
)

/*
Remote Procedure Calls
RPCs are how people tell the lit node what to do.
It ends up being the root of ~everything in the executable.

*/

// A LitRPC is the user I/O interface; it owns and initialized a SPVCon and LitNode
// and listens and responds on RPC

type ExchangeRPC struct {
	Books     []*Book
	OffButton chan bool
}

func serveWS(ws *websocket.Conn) {
	body, err := ioutil.ReadAll(ws.Request().Body)
	if err != nil {
		log.Printf("Error reading body: %v", err)
		return
	}

	log.Printf(string(body))
	ws.Request().Body = ioutil.NopCloser(bytes.NewBuffer(body))

	jsonrpc.ServeConn(ws)
}

func RPCListen(rpcl *ExchangeRPC, port uint16) {

	rpc.Register(rpcl)

	listenString := fmt.Sprintf("127.0.0.1:%d", port)

	http.Handle("/ws", websocket.Handler(serveWS))
	go http.ListenAndServe(listenString, nil)
}

type NoArgs struct{}
type StatusReply struct {
	Error string
}

func (polo *ExchangeRPC) GetOrders(args NoArgs, reply *StatusReply) error {

	return nil
}
