import React, {useEffect} from 'react';
import './style.css';

function About1() {
    useEffect(() => {
        initializeScreen();
    }, [])
    var currentTextInput;
    var puzzelArrayData;

//Loads the Crossword
    function initializeScreen() {
        var puzzelTable = document.getElementById("puzzel");
        puzzelArrayData = preparePuzzelArray();
        for (var i = 0; i < puzzelArrayData.length; i++) {
            var row = puzzelTable.insertRow(-1);
            var rowData = puzzelArrayData[i];
            for (var j = 0; j < rowData.length; j++) {
                var cell = row.insertCell(-1);
                if (rowData[j] !== 0) {
                    var txtID = String('txt' + '_' + i + '_' + j);
                    cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'" + ')">';
                } else {
                    cell.style.backgroundColor = "black";
                }
            }
        }
        addHint();
    }

//Adds the hint numbers
    function addHint() {
        document.getElementById("txt_0_18").placeholder = "1";
        document.getElementById("txt_6_8").placeholder = "2";
        document.getElementById("txt_6_16").placeholder = "3";
        document.getElementById("txt_7_15").placeholder = "4";
        document.getElementById("txt_8_7").placeholder = "5";
        //
        document.getElementById("txt_8_13").placeholder = "6";
        document.getElementById("txt_10_13").placeholder = "7";
        //
        document.getElementById("txt_11_11").placeholder = "8";
        document.getElementById("txt_12_7").placeholder = "9";
        document.getElementById("txt_13_7").placeholder = "10";
        document.getElementById("txt_15_6").placeholder = "11";
        document.getElementById("txt_15_12").placeholder = "12";
        document.getElementById("txt_17_6").placeholder = "13";
        document.getElementById("txt_18_4").placeholder = "14";
        document.getElementById("txt_19_3").placeholder = "15";
        document.getElementById("txt_21_4").placeholder = "16";
        document.getElementById("txt_21_10").placeholder = "17";
        document.getElementById("txt_23_1").placeholder = "18";
        document.getElementById("txt_25_0").placeholder = "19";

    }

//Stores ID of the selected cell into currentTextInput
    function textInputFocus(txtID123) {
        currentTextInput = txtID123;
    }

//Returns Array
    function preparePuzzelArray() {
        var items = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 's', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 't', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'c', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'k', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'i', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 's', 'n', 'o', 'w', 'm', 'a', 'n', 0, 'g', 0, 'n', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 'n', 0, 0, 0, 0, 0, 0, 'j', 'i', 'n', 'g', 'l', 'e'],
            [0, 0, 0, 0, 0, 0, 0, 'c', 'o', 'o', 'k', 'i', 'e', 's', 0, 0, 'n', 0, 's', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 'l', 0, 0, 'g', 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'e', 'l', 'v', 'e', 's', 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'm', 0, 'i', 0, 0, 'r', 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 'o', 0, 0, 0, 'i', 0, 'g', 0, 0, 'b', 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 'r', 'u', 'd', 'o', 'l', 'p', 'h', 0, 0, 'r', 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 'n', 0, 0, 0, 'l', 0, 0, 0, 0, 'e', 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 's', 'a', 'n', 't', 'a', 0, 't', 0, 0, 0, 'a', 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 'm', 0, 0, 0, 0, 'r', 0, 0, 0, 'd', 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 'r', 'e', 'i', 'n', 'd', 'e', 'e', 'r', 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 'p', 0, 0, 'n', 0, 0, 0, 0, 'e', 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 'w', 'r', 'e', 'a', 't', 'h', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 'e' , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 's' , 'u', 'g', 'a', 'r', 'p', 'l', 'u', 'm', 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 'e' , 0, 0, 0, 0, 0, 'l', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 'g', 'r', 'i', 'n' , 'c', 'h', 0, 0, 0, 'g', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 't' , 0, 0, 0, 0, 0,'h', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ['c', 'h', 'r', 'i', 's' , 't', 'm', 'a', 's', 0, 't', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        ];
        return items;
    }

    return (
        <div className="main-wrapper" id="three">
            <div className="tags">
                <div className="tag-container">
                    <div className="tag">
                        <div className="tag-side tag-1-side">
                            <div className="tag-1-top"></div>
                            <div className="tag-text tag-1-text">
                                Merry<br/>Christmas
                                <div className="rule-shape">&#10052;</div>
                            </div>
                        </div>
                        <div className="tag-side tag-1-side is-back">
                            <div className="tag-1-top"></div>
                            <div className="tag-text tag-1-text">
                                And a happy New Year
                                <div className="rule-shape">&#10052;</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tag-container">
                    <div className="tag">
                        <div className="tag-side tag-2-side">
                            <div className="tag-text tag-2-text">
                                God bless<br/>You!
                                <div className="rule-diagonal"></div>
                            </div>
                        </div>
                        <div className="tag-side tag-2-side is-back">
                            <div className="tag-text tag-2-text">
                                May your every wish come true
                                <div className="rule-diagonal"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tag-container">
                    <div className="tag">
                        <div className="tag-side tag-3-side">
                            <div className="tag-text tag-3-text">
                                Lots of Love
                                <div className="rule-shape">&#10052;</div>
                            </div>
                        </div>
                        <div className="tag-side tag-3-side is-back">
                            <div className="tag-text tag-3-text">
                                From Loyalty Fox
                                <div className="rule-shape">&#10052;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="leftBox">
                <table id="puzzel">
                </table>
            </div>
            <div id="rightBox">
                <table>
                </table>
            </div>
            <table id="hintsTable">
                <tr>
                    <td><strong>Across:</strong></td>
                    <td><strong>Down:</strong></td>
                </tr>
                <tr>
                    <td>2. Frosty the _____</td>
                    <td>1. Hang them by the chimney</td>
                </tr>
                <tr>
                    <td>4. ____ bells</td>
                    <td>2. Dashing through the _____</td>
                </tr>
                <tr>
                    <td>5. Snack for Santa</td>
                    <td>3. Cookie building material
                    </td>
                </tr>
                <tr>
                    <td>7. Toy makers</td>
                    <td>6. Santa's ride</td>
                </tr>
                <tr>
                    <td>10. Red nosed reindeer</td>
                    <td>8. Serve with cookies</td>
                </tr>
                <tr>
                    <td>11. He making a list and checking it twice</td>
                    <td>9. Pretty ball to hang on the tree</td>
                </tr>
                <tr>
                    <td>13. Dasher, Dancer, Prancer</td>
                    <td>12. Where you'll find your gifts</td>
                </tr>
                <tr>
                    <td>15. Decorate your door</td>
                    <td>14. Wrapped packages</td>
                </tr>
                <tr>
                    <td>16. Nutcracker Fairy</td>
                    <td>17. They twinkle on the tree</td>
                </tr>
                <tr>
                    <td>18. He tried to steal Christmas</td>
                </tr>
                <tr>
                    <td>19. Merry _____</td>
                </tr>
            </table>
        </div>
    );
}

export default About1;