import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from '3d-react-carousal';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

let arr = [];
let div_id = [];
var c_delay = 0;
var size = 10;
var p;
var cspeed = 0;
var csize = 0;


let slides = [
    <div className="car" >
        <h1>Merge Sort</h1>
        <p>The Merge Sort algorithm is a sorting algorithm that is based on the Divide and Conquer paradigm. In this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner.</p>
        <h1>Time Complexity</h1>
        <p><strong>Worst Case : </strong>O(Nlog(N))</p>
        <p><strong>Average Case : </strong>O(Nlog(N))</p>
        <p><strong>Best Case : </strong>O(Nlog(N))</p>
        <h1>Space Complexity</h1>
        <p><strong>Optimized Case : </strong>O(N)</p>
        <p><strong>General Case : </strong>O(1)</p>
    </div>,
    <div className="car" >
        <h1>Insertion Sort</h1>
        <p>Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.</p>
        <h1>Time Complexity</h1>
        <p><strong>Worst Case : </strong>O(N^2)</p>
        <p><strong>Average Case : </strong>O(N^2)</p>
        <p><strong>Best Case : </strong>O(N)</p>
        <h1>Space Complexity</h1>
        <p><strong>Optimized Case : </strong>O(1)</p>
        <p><strong>General Case : </strong>O(1)</p>
    </div>,
    <div className="car" >
        <h1>Bubble Sort</h1>
        <p>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.</p>
        <h1>Time Complexity</h1>
        <p><strong>Worst Case : </strong>O(N^2)</p>
        <p><strong>Average Case : </strong>O(N^2)</p>
        <p><strong>Best Case : </strong>O(N^2)</p>
        <h1>Space Complexity</h1>
        <p><strong>Optimized Case : </strong>O(1)</p>
        <p><strong>General Case : </strong>O(1)</p>
    </div>

];

// Resetarr(arr);

function SortVisual() {
    c_delay = 0;
    // const [flag,setflag] = useState(false);
    const [carr, setarr] = useState(arr);
    // const [cspeed,setspeed]  = useState(speed);
    // const [csize,setsize] = useState(size);
    var delay_time = 10000 / (Math.floor((csize+20) / 20) * (cspeed + 50));

    // function flagchange(){
    //     setflag(prev => !prev);
    // }

    function Resetarr(ar) {
        div_id = [];
        for (let i = 0; i < csize; i++) {
            let a = (Math.floor(Math.random() * 650) + 20);
            ar.push(a);
            div_id.push(a.toString() + "px");
        }
        console.log(div_id);
    }

    function inputEvent1(value) {
        cspeed = value;
        // setspeed(value);
        return value;
    }

    function inputEvent2(value) {
        csize = value;
        // setsize(value);
        return csize;
    }

    function div_update(cont, height, color) {
        p = setTimeout(function () {
            cont.innerHTML = parseInt(height,10);
            cont.style = " height:" + height + "; background-color:" + color;
        }, c_delay += delay_time);
    }

    function newarr() {
        if (csize === 0)
            alert("Enter valid array size");
        let k = [];
        Resetarr(k);
        setarr(k);
    }

    function enable_buttons() {
        window.setTimeout(function () {
            let btns = document.getElementsByClassName("btn");
            for (let i = 0; i < btns.length; i++)
                btns[i].disabled = false;
            // flagchange();
        }, c_delay += delay_time);
    }

    function swap(ar, div_id, first_Index, second_Index) {
        let temp = ar[first_Index];
        ar[first_Index] = ar[second_Index];
        ar[second_Index] = temp;
        let k1 = document.getElementById(first_Index.toString());
        let k2 = document.getElementById(second_Index.toString());
        div_id[first_Index] = ar[first_Index].toString() + "px";
        div_id[second_Index] = ar[second_Index].toString() + "px";

        div_update(k1, div_id[first_Index], "red");
        div_update(k2, div_id[second_Index], "red");
    }

    function bubbleSort(ar) {
        let len = ar.length,
            i, j, stop;

        for (i = 0; i < len; i++) {
            let k1, k2;
            for (j = 0, stop = len - i; j < stop; j++) {
                let a = parseInt(div_id[j], 10);
                let b = parseInt(div_id[j + 1], 10);
                if (a > b) {
                    swap(ar, div_id, j, j + 1);
                    k1 = document.getElementById(j.toString());
                    k2 = document.getElementById((j + 1).toString());
                    div_update(k1, div_id[j], "rgb(29, 199, 29);");
                    div_update(k2, div_id[j + 1], "rgb(29, 199, 29);");
                }
            }
        }
        return ar;
    }

    function merge(a, start, mid, end) {
        let temp = [];
        let i = start;
        let j = mid + 1;
        let k = 0;
        while (i <= mid && j <= end) {
            if (a[i] <= a[j]) {
                temp[k] = a[i];
                div_id[i] = a[i].toString() + "px";
                let k1 = document.getElementById((i).toString());
                div_update(k1, div_id[i], "red");
                k++;
                i++;
            }
            else {
                temp[k] = a[j];
                div_id[j] = a[j].toString() + "px";
                let k1 = document.getElementById((j).toString());
                div_update(k1, div_id[j], "red");
                k++;
                j++;
            }
        }
        while (i <= mid) {
            temp[k] = a[i];
            div_id[i] = a[i].toString() + "px";
            let k1 = document.getElementById((i).toString());
            div_update(k1, div_id[i], "red");
            k++;
            i++;
        }
        while (j <= end) {
            temp[k] = a[j];
            div_id[j] = a[j].toString() + "px";
            let k1 = document.getElementById((j).toString());
            div_update(k1, div_id[j], "red");
            k++;
            j++;
        }
        for (let l = start; l <= end; l++) {
            a[l] = temp[l - start];
            div_id[l] = a[l].toString() + "px";
            let k1 = document.getElementById((l).toString());
            div_update(k1, div_id[l], "rgb(29, 199, 29);");
        }
        return a;
    }

    function mergesort(a, start, end) {
        if (start < end) {
            let mid = Math.floor((start + end) / 2);
            let k1 = document.getElementById(mid.toString());
            div_update(k1, div_id[mid], "yellow");
            mergesort(a, start, mid);
            mergesort(a, mid + 1, end);
            merge(a, start, mid, end);
        }
    }

    function insertionSort(inputArr) {
        let length = inputArr.length;
        for (let i = 1; i < length; i++) {
            let key = inputArr[i];
            let k1 = document.getElementById(i.toString());
            div_update(k1, div_id[i], "yellow");
            let j = i - 1;
            while (j >= 0 && inputArr[j] > key) {
                inputArr[j + 1] = inputArr[j];
                div_id[j + 1] = inputArr[j + 1].toString() + "px";
                let k2 = document.getElementById((j + 1).toString());
                div_update(k2, div_id[j + 1], "red");
                div_update(k2, div_id[j + 1], "rgb(29, 199, 100);");
                j = j - 1;
            }
            inputArr[j + 1] = key;
            div_id[j + 1] = inputArr[j + 1].toString() + "px";
            let k2 = document.getElementById((j + 1).toString());
            div_update(k2, div_id[j + 1], "rgb(29, 199, 29);");
        }
        
        return inputArr;
    };

    function Arrbar(val, i) {
        return (<div className="bar" id={i.toString()} key={i}
            style={{ height: `${val}px` }}>{val}</div>);
    }

    function insertion_sort() {
        if (csize === 0)
            alert("Enter valid array size");
        let btns = document.getElementsByClassName("btn");
        for (let i = 0; i < btns.length; i++)
            btns[i].disabled = true;
        // flagchange();
        let isorted = insertionSort(carr);
        setarr(isorted);
        enable_buttons();
    }

    function bubble_sort() {
        if (csize === 0)
            alert("Enter valid array size");
        let btns = document.getElementsByClassName("btn");
        for (let i = 0; i < btns.length; i++)
            btns[i].disabled = true;
        // flagchange();
        let bsorted = bubbleSort(carr);
        setarr(bsorted);
        console.log(carr);
        enable_buttons();
    }

    function merge_sort() {
        if (csize === 0)
            alert("Enter valid array size");
        let btns = document.getElementsByClassName("btn");
        for (let i = 0; i < btns.length; i++)
            btns[i].disabled = true;
        // flagchange();
        let start = 0;
        let end = carr.length - 1;
        mergesort(carr, start, end);
        setarr(carr);
        console.log(carr);
        enable_buttons();
    }

    return (
        <>
            <h1 className="big-heading">Sorting Visualizer</h1>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='1'>
                        <div className="buttons">
                            <button onClick={merge_sort} className="btn btn-dark btn-lg download-button">Merge Sort</button>
                            <br></br>
                            <br></br>
                            <button onClick={insertion_sort} className="btn btn-dark btn-lg download-button">Insertion Sort</button>
                            <br></br>
                            <br></br>
                            <button onClick={bubble_sort} className="btn btn-dark btn-lg download-button">Bubble Sort</button>
                            <br></br>
                            <br></br>
                            <button onClick={newarr} className="btn btn-dark btn-lg download-button">New Array</button>
                            <br></br>
                            <br></br>
                            <Slider
                                min={-20}
                                max={20}
                                defaultValue={0}
                                getAriaValueText={inputEvent1}
                                aria-labelledby="discrete-slider-always"
                                step={1}
                                valueLabelDisplay="on"
                            />
                            <h4>Sorting Speed</h4>
                            <br></br>
                            <br></br>
                            <Slider
                                defaultValue={0}
                                max={45}
                                getAriaValueText={inputEvent2}
                                aria-labelledby="discrete-slider-always"
                                step={5}
                                valueLabelDisplay="on"
                            />
                            <h4>Array Size</h4>
                        </div>
                    </MDBCol>
                    <MDBCol size='10'>
                        <div className="arr_container">
                            {carr.map(Arrbar)}
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Carousel slides={slides} autoplay={true} interval={5000} />
        </>
    );
}
export default SortVisual;
