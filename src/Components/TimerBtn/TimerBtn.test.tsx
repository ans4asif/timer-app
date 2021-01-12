import React from "react"
import { shallow } from "enzyme"
import {TimerBtn} from './TimerBtn'

describe("TimerBtn", () => {
  let container:any

  beforeEach(() => (container = shallow(<TimerBtn />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })

  it("should render 3 buttons", () => {
    expect(container.find("button").length).toEqual(3)
  })

})