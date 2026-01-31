import random

exit_input = str(input('для выхода введите exit: '))

PieceType =["pawn","rook","knight","bishop","queen","king"]
PieceTypeClass = ["Pawn","Rook","Knight","Bishop","Queen","King"]
PieceTypeTranslate =["пешка","ладья","король","слон","королева","король"]
xMap = 'abcdefgh'
yMap= '12345678'
colorMap = ['white','black']
colorMapTranslate = ['белая(ый)','черная(ый)']

symbols = 'abcdefghijklmnopqrstuvwxyz'
length = 20
with open ('tests/moves.test.ts','a', encoding='utf-8') as f:
    while exit_input != 'exit':
        countPiece = int(input('Введите количество фигур (будут проверять куда может пойти первая фигура):'))
        print('')
        
        pieces=[]
        namePieces=[]
        info=[]
        pieceHasMoves = ''
        pieceHasMovesName = ''
        for i in range(countPiece):
            data = str(input('Введите координаты(x(от a до h) затем y(от 1 до 8)), цвет(white or black), тип(pawn,rook,knight,bishop,queen,king) (все через пробел):'))
            print('')
            x,y,color,typ = data.split()
            if (x not in xMap) or (y not in yMap) or (color not in colorMap ) or (typ not in PieceType):
                print('Ошибка, попробуйте снова')
                data = str(input('Введите координаты(x(от a до h) затем y(от 1 до 8)), цвет(white or black), тип(pawn,rook,knight,bishop,queen,king) (все через пробел):'))
                print('')
                x,y,color,typ = data.split()

            namePiece = ''.join(random.choices(symbols,k=length))
            piece = 'const '+ namePiece +' = '+'new '+ PieceTypeClass[PieceType.index(typ)] + '({ x: "'+x+'", y: '+y+' }, "'+color+'", "'+typ+'");'
            pieces.append(piece)
            namePieces.append(namePiece+',')
            info.append(colorMapTranslate[colorMap.index(color)] +' '+ PieceTypeTranslate[PieceType.index(typ)] +' стоит на ' + x+y+',')
            if i==0:
                pieceHasMoves = colorMapTranslate[colorMap.index(color)] + ' ' +PieceTypeTranslate[PieceType.index(typ)] + ' может пойти на '
                pieceHasMovesName = namePiece
        
        countMoves = int(input('Введите количество доступных ходов:'))
        print('')


        moves=[]
        coordinates=[]
        for i in range(countMoves):
            cord = str(input('введите доступные ход (координаты через  пробел):'))
            print('')

            x,y = cord.split()
            if (x not in xMap) or (y not in yMap):
                print('ошибка')
                cord = str(input('введите доступный ходы (через  пробел):'))
                print('')
            move = '{ x: "'+x+'", y: '+y+' },'
            moves.append(move)
            coordinates.append(x+y+',')
        
        arrayName = 'testArray'+''.join(random.choices(symbols,k=length))
        resultArrayName = 'resultArray' + ''.join(random.choices(symbols,k=length))
        array = 'const '+arrayName+' = ['
        resultArray = 'const '+resultArrayName+' = ['

        for i in namePieces:
            array+=i
        for i in moves:
            resultArray+=i
        array += '];'
        resultArray += '];'

        test = 'test("'
        for i in info:
            test+=i
        test+=pieceHasMoves
        for i in coordinates:
            test+=i
        
        test+='", ()=> {'
        for i in pieces:
            f.write(i+'\n\n')
        f.write(array+'\n\n')
        f.write(resultArray+'\n\n')
        f.write(test)
        f.write(' expect('+pieceHasMovesName+'.hasMoved('+arrayName+')).toEqual(')
        f.write(resultArrayName+',')
        f.write(' );')
        f.write('});')
        print('Записанно')

        exit_input = str(input('для выхода введите exit: '))
