describe("add",function(){
    
    it("should be able to add two numbers", function(){
        expect(add(0,0)).toBe(0);

        expect(add(4,5)).toBe(9);
    });
   
    it("should be able to add negative integers", function(){
        expect(add(-1,-1)).toBe(-2);

        expect(add(-1,2)).toBe(1);
    });

    it("should be able to add multiple numbers", function(){
        expect(add(1,2,3,4)).toBe(10);
    });
    it("should be able to add float numbers", function(){
        expect(add(1.3,3.1,4.5,6.4)).toBe(15.3);
    });
    it("should be able to add numbers that are given as strings", function(){
        expect(add(1,'2',3,'4',5)).toBe(15);
    });

});

describe("multiply", function(){
    it("should be able to multiply two numbers", function(){
        expect(multiply(1,2)).toBe(2);
    });
    it("should be able to multiply multiple numbers",function(){
        expect(multiply(1,2,3,4)).toBe(24);

        expect(multiply(1,2,3,5)).toBe(30);
    });
    it("should be able to multiply numbers that are given as strings",function(){
        expect( multiply(1,'2',3,'5')).toBe(30);
    });
    it("should be able to multiply negative numbers", function(){
        expect(multiply (-2,-1)).toBe(2);

        expect(multiply(-3,1)).toBe(-3);
    });
});