"use client";

import { useState, useEffect, useRef } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import Chart from "chart.js/auto";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
    if (!date) {
      setDate(new Date().toISOString().split('T')[0]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    updateChart();
  }, [expenses]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (name && cost && quantity && date) {
      const expenseCost = parseFloat(cost) * parseFloat(quantity);
      setExpenses([
        ...expenses,
        {
          name,
          cost: expenseCost,
          quantity: parseFloat(quantity),
          date,
        },
      ]);
      setName("");
      setCost("");
      setQuantity("");
    }
  };

  const handleClear = () => {
    setExpenses([]);
    setName("");
    setCost("");
    setQuantity("");
    setDate("");
    setDate(new Date().toISOString().split('T')[0]);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const totalExpensesByDate = (date) => {
    return expenses
      .filter((expense) => expense.date === date)
      .reduce((acc, expense) => acc + expense.cost, 0);
  };

  const totalExpenses = () => {
    return expenses.reduce((acc, expense) => acc + expense.cost, 0);
  };

  const updateChart = () => {
    const ctx = chartRef.current.getContext("2d");
    const dates = [...new Set(expenses.map((expense) => expense.date))];
    const totals = dates.map((date) => totalExpensesByDate(date));

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Total Expense",
            data: totals,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "rgba(255, 99, 132, 1)",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>
      <form onSubmit={handleAddExpense} className="mb-4">
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Expense name"
            className="rounded-lg p-2 flex-1"
          />
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="Cost per unit"
            className="rounded-lg p-2"
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            className="rounded-lg p-2"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-lg p-2"
          />
          <button type="submit" className="rounded-lg bg-black text-white p-2">
            <BsPlusCircle />
          </button>
        </div>
      </form>
      <ul className="mb-4">
        {expenses.map((expense, index) => (
          <li
            key={index}
            className="border-b py-2 flex justify-between items-center"
          >
            <div>
              {expense.name}: ${expense.cost.toFixed(2)} (Quantity:{" "}
              {expense.quantity}) on {expense.date}
            </div>
            <button
              onClick={() => handleDeleteExpense(index)}
              className="rounded-lg bg-red-500 text-white p-2 ml-4"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <div className="font-bold">
        Total: $
        {totalExpenses().toFixed(2)}
      </div>
      <button
        type="button"
        onClick={handleClear}
        className="rounded-lg bg-red-500 text-white p-2"
      >
        Clear
      </button>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Expenses Chart</h2>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default ExpenseTracker;
