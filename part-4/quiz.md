- What is the PATH environment variable used for in UNIX systems?
    It specifies a set of directories where executable programs are located

- On a UNIX computer, how do you stop a running process?
    using a PID; if you first enter the command -> ps aux <- you get a list of process id's, from there you can execute -> kill (PID) <- which will stop the process

- Which command can you use to see which homebrew packages you've installed?
    brew list

- On a UNIX computer, how do you find the process id of a running process?
    ps aux

- In a terminal, what does control-c do?
    it sends an INT/interrupt signal, which causes the process to terminate

- What would be the result of typing the following commands?
  ```sh
  $ cd /Users/lucy
  $ mkdir one
  $ touch alpha
  $ cd one
  $ touch alpha
  $ pwd
  ```

    /Users/lucy/one


- How do you see which environment variables are set in your shell?
    printenv or env

- What keyboard shortcut do you use to perform a "Find" search in your editor?
    command + F

- How do you see which aliases you have in your shell?
    alias

- When a terminal command completes, how can you tell if it was successful or not?
  With zsh, when a command is complete the script will run and depending if you have console.logs you may get a return

  But a key identifier will be on the next line the arrow will be green if it was successful and red if it fails

- What does your `~/.gitconfig` have in it? (paste the whole file here)
    zsh: no such file or directory: /.gitconfig

- What is the difference between a relative and absolute path?
    A relative path navigates from the current file, while absolute routes from the home directory

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── airbnb-for-llamas
      │   └── package.json
      └── facebook-for-mimes
          ├── README.md
          └── package.json
  ```

  And you were in the `facebook-for-mimes` folder. What command would you use to copy the `README.md` file to the `airbnb-for-llamas` folder?

  mv README.md ../airbnb-for-llamas

- What keyboard shortcut do you use in your editor to quickly navigate to a file in the current project?
  command + P

- Give an example of a file or folder pattern you commonly add to a .gitignore file and why you add it
    I usually add my node_modules folder to .gitignore because while it holds all the dependencies for the program to run; all this will be downloaded when running npm install

- What are the main differences between `Array.sort` and `Array.filter` in JavaScript?
    Array.sort() sorts the elements in an array according to string Unicode code points => then returns the same array

    Array.filter() => creates a new array with all the elements that pass the test implemented by the callback function
