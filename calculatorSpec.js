describe("add",function(){
    
    it("should be able to add two numbers", function(){
        var result = add(0,0);
        expect(result).toBe(0);
        
        var result = add(4,5);
        expect(result).toBe(9);
    });
   
    it("should be able to add negative integers", function(){
        var result = add(-1,-1);
        expect(result).toBe(-2);

        var result = add(-1,2);
        expect(result).toBe(1);
    })

    it("should be able to add multiple numbers", function(){
        var result = add(1,2,3,4);
        expect(result).toBe(10);
    })
    it("should be able to add float numbers", function(){
        var result = add(1.3,3.1,4.5,6.4);
        expect(result).toBe(15.3);
    })
    it("should be able to add numbers that are given as strings", function(){
        var result = add(1,'2',3,'4',5);
        expect(result).toBe(15);
    })

});

describe("multiply", function(){
    it("should be able to multiply two numbers", function(){
        var result = multiply(1,2);
        expect(result).toBe(2);
    })
    it("should be able to multiply multiple numbers",function(){
        var result = multiply(1,2,3,4);
        expect(result).toBe(24);

        var result = multiply(1,2,3,5);
        expect(result).toBe(30);
    })
    it("should be able to multiply numbers that are given as strings",function(){
        var result = multiply(1,'2',3,'5');
        expect(result).toBe(30);
    })
    it("should be able to multiply negative numbers", function(){
        var result = multiply (-2,-1);
        expect(result).toBe(2);

        var result = multiply(-3,1);
        expect(result).toBe(-3);
    })
});