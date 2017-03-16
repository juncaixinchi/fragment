const C = x => f => f ? C(f(x)) : x
C(36)(x=>Math.sqrt(x))(x=>x.toString)()
