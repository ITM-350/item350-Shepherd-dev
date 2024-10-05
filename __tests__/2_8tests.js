// Pass or fail test.
test("Insanity test", () => {
    expect(true).toBe(true);
}
);

// Data-driven test. 

const add = (a, b) => {
    return a + b;
};

test("Addition test", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 3)).toBe(5);
    expect(add(3, 4)).toBe(7);
    expect(add(4, 5)).toBe(9);
    expect(add(5, 6)).toBe(11);
    expect(add(6, 7)).toBe(13);
    expect(add(7, 8)).toBe(15);
    expect(add(8, 9)).toBe(17);
    expect(add(9, 10)).toBe(19);
}
);

// Collection Management Test.

const subtract = (a, b) => {
    return a - b;
};

test("Subtraction test", () => {
    const testCases = [
        [1, 2, -1],
        [2, 3, -1],
        [3, 4, -1],
        [4, 5, -1],
        [5, 6, -1],
        [6, 7, -1],
        [7, 8, -1],
        [8, 9, -1],
        [9, 10, -1]
    ];

    testCases.forEach(testCase => {
        expect(subtract(testCase[0], testCase[1])).toBe(testCase[2]);
    });
}
);


// Performance Pattern Test.

const performanceTest = () => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
    return sum;
};

test("Performance test", () => {
    expect(performanceTest()).toBe(499999500000);
}
);

// Process Pattern Test.

const processTest = () => {
    return "Process Test";
}

test("Process test", () => {
    expect(processTest()).toBe("Process Test");
}
);

// Simulation Pattern Test.

const simulationTest = () => {
    setTimeout(() => {
        return "Simulation Test";
    }, 2000);
}

test("Simulation test", () => {
    expect(simulationTest()).toBe("Simulation Test");
}
);

// multithreading patterns test

const asyncFunction = (callback) => {
    setTimeout(() => {
        callback("Async Test");
    }, 2000);
}   

test("Async test", (done) => {
    asyncFunction((data) => {
        expect(data).toBe("Async Test");
        done();
    });
}
);

// Stress test pattern test

const stressTest = () => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
    return sum;
};

test("Stress test", () => {
    expect(stressTest()).toBe(499999500000);
}
);









