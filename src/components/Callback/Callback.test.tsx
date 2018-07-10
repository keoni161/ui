import * as React from "react";

import { mount as enzymeMount } from "enzyme";
import "jest-enzyme";

import Callback from "./Callback";

describe("Callback", () => {
    let mounted: React.ReactNode;

    const mount = () => {
        mounted = mounted || enzymeMount(<Callback />);
        return mounted;
    };

    beforeEach(() => {
        mounted = null;
    });

    describe("renders", () => {
        it("without crashing", () => {
            expect(mount()).toExist();
        });
    });
});
