import React from "react"
import { shallow } from "enzyme"
import {Timer} from './Timer'
describe("Timer", () => {
  let container:any
const time= {h:0,m:0,s:0};

  beforeEach(() => (container = shallow(<Timer time={time} />)))

  it("should render 3 <span>", () => {
    expect(container.find("span").length).toEqual(3)
  })

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })

})