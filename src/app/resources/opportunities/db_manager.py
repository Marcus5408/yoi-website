import re
import tkinter as tk
from tkinter import messagebox
from tkinter import ttk
from tkinter.tix import *
import json

class AddToDB(tk.Tk):
    def __init__(self):
        super().__init__()

        self.title("Add to Opportunity DB JSON")
        self.geometry("1140x480")

        # add frames to create column headers
        self.headings = ttk.Treeview(self, show="headings", height=0)
        self.headings["columns"] = ("gap1", "provider", "gap2", "availability", "gap3")
        self.headings.column("gap1", width=560)
        self.headings.column("provider", width=170)
        self.headings.column("gap2", width=50)
        self.headings.column("availability", width=160)
        self.headings.column("gap3", width=200)
        self.headings.heading("provider", text="Provider", anchor=tk.CENTER)
        self.headings.heading("availability", text="Availability", anchor=tk.CENTER)

        self.headings.grid(row=0, column=0, columnspan=4, sticky=tk.W)

        # create table of data
        self.table = ttk.Treeview(self, height=20, selectmode="extended")
        self.columns = {
            "title": 200,
            "posted": 70,
            "deadline": 70,
            "location": 100,
            "description": 100,
            "name": 100,
            "url": 70,
            "link": 50,
            "allAges": 50,
            "min": 30,
            "max": 30,
            "open": 50,
            "tags": 100,
            "requirements": 100
        }
        self.table["columns"] = tuple(self.columns.keys())
        self.table.column("#0", width=20)
        for index, col in enumerate(self.table["columns"]):
            width = tuple(self.columns.values())[index]
            self.table.column(col, anchor=tk.W, width=width)
            self.table.heading(col, text=col)

        self.add_entry_button = ttk.Button(self, text="Add Entry", width=15, command=self.add_entry)
        self.delete_entry_button = ttk.Button(self, text="Delete Entry", width=15, command=self.delete_entry)
        self.save_changes_button = ttk.Button(self, text="Save", width=15, command=self.save_changes)
        
        self.table.grid(row=1, column=0, columnspan=4, sticky=tk.W)
        self.add_entry_button.grid(row=2, column=1)
        self.delete_entry_button.grid(row=2, column=2)
        self.save_changes_button.grid(row=2, column=3)

        self.columnconfigure(0, weight=48)
        self.columnconfigure(1, weight=1)
        self.columnconfigure(2, weight=1)
        self.columnconfigure(3, weight=1)

        with open(f"{__file__.replace("db_manager.py", "")}opportunity_db.json", "r", encoding="utf-8") as f:
            opportunities = json.load(f)
            for index, opportunity in enumerate(opportunities):
                # process data to be displayed in table, then display it
                data = []
                for key in opportunity:
                    if isinstance(opportunity[key], str):
                        data.append(str(opportunity[key]))
                    elif isinstance(opportunity[key], dict):
                        # make sure to make every value a string!
                        # also, make sure each value is appended to `data` separately
                        for _, v in opportunity[key].items():
                            data.append(v)
                    elif isinstance(opportunity[key], list):
                        data.append("\n".join(opportunity[key]))

                # set column #0 to index
                self.table.insert("", "end", id=index, values=data)

    # add_entry() func creates a new window to input data
    def add_entry(self):
        self.entry_window = tk.Toplevel(self)
        self.entry_window.title("Add Entry")
        self.entry_window.geometry("400x560")

        row = 0
        self.entry_fields = []
        for entry in tuple(self.columns.keys()):
            setattr(self, f"{entry}_label", ttk.Label(self.entry_window, text=entry, padding=(5, 2)))
            getattr(self, f"{entry}_label").grid(row=row, column=0, sticky=tk.NE)
            if entry in ["description", "tags", "requirements"]:
                if entry == "tags":
                    # add a label to explain how to enter tags and requirements
                    self.instructions = ttk.Label(self.entry_window, text="Enter tags and requirements separated by new lines.", padding=(5, 2))
                    self.instructions.grid(row=row, column=1, columnspan=3, sticky=tk.W)
                    self.tags_label.grid(row=row+1, column=0, sticky=tk.NE)
                    row += 1
                setattr(self, f"{entry}_text", tk.Text(self.entry_window, width=38, height=5))
                getattr(self, f"{entry}_text").grid(row=row, column=1, columnspan=3)
                self.entry_fields.append(f"{entry}_text")
            elif entry in ["allAges", "open"]:
                # radio buttons for boolean values
                setattr(self, f"{entry}_var", tk.BooleanVar())
                setattr(self, f"{entry}_true", ttk.Radiobutton(self.entry_window, text="Yes", variable=getattr(self, f"{entry}_var"), value=True))
                setattr(self, f"{entry}_false", ttk.Radiobutton(self.entry_window, text="No", variable=getattr(self, f"{entry}_var"), value=False))
                getattr(self, f"{entry}_true").grid(row=row, column=1)
                getattr(self, f"{entry}_false").grid(row=row, column=2)
                self.entry_fields.append(f"{entry}_var")
            elif entry in ["min", "max"]:
                setattr(self, f"{entry}_spinbox", ttk.Spinbox(self.entry_window, width=20, from_=0, to=100))
                getattr(self, f"{entry}_spinbox").grid(row=row, column=1, columnspan=2, sticky=tk.W)
                self.entry_fields.append(f"{entry}_spinbox")
            else:
                setattr(self, f"{entry}_entry", ttk.Entry(self.entry_window, width=50))
                getattr(self, f"{entry}_entry").grid(row=row, column=1, columnspan=3)
                self.entry_fields.append(f"{entry}_entry")
            row += 1
        
        self.submit_button = ttk.Button(self.entry_window, text="Submit", command=self.submit)
        self.submit_button.grid(row=row, column=3, sticky=tk.E)

        self.entry_window.columnconfigure(0, weight=2)
        self.entry_window.columnconfigure(1, weight=1)
        self.entry_window.columnconfigure(2, weight=1)
        self.entry_window.columnconfigure(3, weight=10)

    # submit() func adds data to table
    def submit(self):
        data = []
        for entry in self.entry_fields:
            if "text" in entry:
                # check if text field is empty
                if not getattr(self, entry).get("1.0", tk.END).strip():
                    field = entry.replace("_text", "")
                    self.popup = messagebox.showinfo("Error", f"Please enter text for {field}.")
                    return
                data.append(getattr(self, entry).get("1.0", tk.END).strip())
            elif "var" in entry:
                data.append(getattr(self, entry).get())
            elif "spinbox" in entry:
                try:
                    data.append(int(getattr(self, entry).get()))
                except ValueError:
                    field = entry.replace("_spinbox", "")
                    self.popup = messagebox.showinfo("Error", f"Please enter a valid number for {field}.")
                    return
            elif "entry" in entry:
                field = entry.replace("_entry", "")
                if entry in ["posted_entry", "deadline_entry"]:
                    # check if date is in correct format: MM-DD-YYYY
                    date = getattr(self, entry).get()
                    if not re.match(r"([0-9]{2}-){2}[0-9]{4}", date):
                        self.popup = messagebox.showinfo("Error", f"Please enter date in MM-DD-YYYY format for {field}.")
                        return
                    data.append(getattr(self, entry).get())
                elif entry in ["link_entry", "url_entry"]:
                    url = getattr(self, entry).get()
                    if not re.match(r"[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?", url):
                        self.popup = messagebox.showinfo("Error", f"Please enter a valid URL for {field}.")
                        return
                    data.append(getattr(self, entry).get().strip())
                else:
                    if not getattr(self, entry).get().strip():
                        self.popup = messagebox.showinfo("Error", f"Please enter text for {field}.")
                        return
                    data.append(getattr(self, entry).get())

        self.table.insert("", "end", values=data)

        for entry in tuple(self.columns.keys()):
            if "text" in entry:
                getattr(self, f"{entry}_text").delete("1.0", tk.END)
            elif "var" in entry:
                getattr(self, f"{entry}_var").set(False)
            elif "spinbox" in entry:
                getattr(self, f"{entry}_spinbox").delete(0, tk.END)
            elif "entry" in entry:
                getattr(self, f"{entry}_entry").delete(0, tk.END)

    def delete_entry(self):
        selected = self.table.selection()
        if not selected:
            self.popup = messagebox.showinfo("Error", "No entry selected.")
            return

        for item in selected:
            self.table.delete(item)
    
    def save_changes(self):
        with open(f"{__file__.replace('db_manager.py', '')}opportunity_db.json", "w", encoding="utf-8") as f:
            opportunities = []
            for index in self.table.get_children():
                data = self.table.item(index)["values"]
                opportunity = {
                    "title": data[0],
                    "posted": data[1],
                    "deadline": data[2],
                    "location": data[3],
                    "description": data[4],
                    "provider": {
                        "name": data[5],
                        "url": data[6],
                    },
                    "link": data[7],
                    "availability": {
                        "allAges": bool(data[8]),
                        "min": data[9],
                        "max": data[10],
                        "open": bool(data[11]),
                    },
                    "tags": data[12].split("\n"),
                    "requirements": data[13].split("\n"),
                }
                opportunities.append(opportunity)
            json.dump(opportunities, f)

if __name__ == "__main__":
    app = AddToDB()
    app.mainloop()
